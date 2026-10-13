import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from './auth.schema.js';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private readonly authModel: Model<Auth>,
    private readonly configService: ConfigService,
  ) {}

  async create(email: string, password: string): Promise<AuthDocument> {
    return await this.authModel.create({ email, password });
  }

  async findByEmail(email: string): Promise<AuthDocument | null> {
    return await this.authModel.findOne({ email }).exec();
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(
      password,
      this.configService.get<number>('BCRYPT_SALT_ROUNDS', 10),
    );
  }

  async checkPassword(password: string, storedHash: string) {
    return await bcrypt.compare(password, storedHash);
  }
}
