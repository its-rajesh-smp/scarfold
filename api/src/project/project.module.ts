import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from './project.schema.js';
import { PassportModule } from '@nestjs/passport';
import { ProjectController } from './project.controller.js';
import { ProjectService } from './project.service.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}
