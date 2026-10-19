import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Field } from './field.schema.js';
import { Model } from 'mongoose';
import type { CreateFieldInput, UpdateFieldInput } from './field.dto.js';

@Injectable()
export class FieldService {
  constructor(
    @InjectModel(Field.name) private readonly fieldModel: Model<Field>,
  ) {}

  async findAllByProject(projectId: string) {
    return await this.fieldModel
      .find({ projectId, isArchived: false })
      .sort({ createdAt: 1 });
  }

  async create(projectId: string, data: CreateFieldInput) {
    return await this.fieldModel.create({ projectId, ...data });
  }

  async update(fieldId: string, projectId: string, data: UpdateFieldInput) {
    return await this.fieldModel.findOneAndUpdate(
      { _id: fieldId, projectId, isArchived: false },
      data,
      { returnDocument: 'after', runValidators: true },
    );
  }

  async archive(fieldId: string, projectId: string) {
    return await this.fieldModel.findOneAndUpdate(
      { _id: fieldId, projectId, isArchived: false },
      { isArchived: true },
    );
  }
}
