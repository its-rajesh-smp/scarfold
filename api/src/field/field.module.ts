import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { FieldSchema } from './field.schema.js';
import { FieldController } from './field.controller.js';
import { FieldService } from './field.service.js';
import { ProjectModule } from '../project/project.module.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Field', schema: FieldSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ProjectModule,
  ],
  controllers: [FieldController],
  providers: [FieldService],
})
export class FieldModule {}
