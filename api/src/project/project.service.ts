import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './project.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}

  async findAllByUser(userId: string) {
    return await this.projectModel.find({ userId });
  }

  async findOneByUser(projectId: string, userId: string) {
    return await this.projectModel.findOne({ _id: projectId, userId });
  }

  async create(userId: string, data: any) {
    return await this.projectModel.create({ userId, ...data });
  }

  async update(projectId: string, userId: string, updateData: any) {
    return await this.projectModel.updateOne(
      { _id: projectId, userId },
      updateData,
    );
  }

  async archive(projectId: string, userId: string) {
    return await this.projectModel.updateOne(
      { _id: projectId, userId },
      { isArchived: true },
    );
  }
}
