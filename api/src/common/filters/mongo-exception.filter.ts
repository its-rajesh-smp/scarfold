import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import type { Response } from 'express';
import { Error as MongooseError, mongo } from 'mongoose';

type DbError =
  | InstanceType<typeof mongo.MongoServerError>
  | MongooseError.ValidationError
  | MongooseError.CastError;

/**
 * Turns database errors into proper HTTP responses instead of a generic 500.
 * Response shape matches Nest's built-in errors: { statusCode, message, error }.
 */
@Catch(
  mongo.MongoServerError,
  MongooseError.ValidationError,
  MongooseError.CastError,
)
export class MongoExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(MongoExceptionFilter.name);

  catch(exception: DbError, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse<Response>();
    const { status, message } = this.toHttp(exception);

    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(exception.message, exception.stack);
    }

    res.status(status).json({
      statusCode: status,
      message,
      error: HttpStatus[status],
    });
  }

  private toHttp(exception: DbError): {
    status: HttpStatus;
    message: string | string[];
  } {
    // Unique index violation, e.g. email already exists
    if (
      exception instanceof mongo.MongoServerError &&
      exception.code === 11000
    ) {
      const fields = Object.keys(exception.keyValue ?? {});
      return {
        status: HttpStatus.CONFLICT,
        message: fields.length
          ? `${fields.join(', ')} already exists`
          : 'Duplicate value',
      };
    }

    // Schema validation failed, e.g. a required field is missing
    if (exception instanceof MongooseError.ValidationError) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: Object.values(exception.errors).map((e) => e.message),
      };
    }

    // Value couldn't be cast to the schema type, e.g. a malformed id
    if (exception instanceof MongooseError.CastError) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: `Invalid ${exception.path}`,
      };
    }

    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    };
  }
}
