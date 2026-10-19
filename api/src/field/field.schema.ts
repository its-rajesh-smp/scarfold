import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v7 as uuid } from 'uuid';

export enum FieldType {
  TEXT = 'TEXT',
  TEXT_AREA = 'TEXT_AREA',
  NUMBER = 'NUMBER',
  CHECKBOX = 'CHECKBOX',
}

@Schema({ timestamps: true, id: true })
export class Field {
  @Prop({ type: String, default: () => uuid() })
  _id: string;

  // Human-readable name shown in the dashboard, e.g. "Hero title"
  @Prop({ required: true, type: String })
  label: string;

  // Property name used in the content API response, e.g. "heroTitle"
  @Prop({ required: true, type: String })
  key: string;

  @Prop({
    required: true,
    type: String,
    enum: Object.values(FieldType),
    default: FieldType.TEXT,
  })
  type: FieldType;

  @Prop({ type: Boolean, default: false })
  isRequired: boolean;

  @Prop({ required: true, type: String, ref: 'Project' })
  projectId: string;

  @Prop({ type: Boolean, default: false })
  isArchived: boolean;
}

export const FieldSchema = SchemaFactory.createForClass(Field);

// A key can only be used once per project among active fields
FieldSchema.index(
  { projectId: 1, key: 1 },
  { unique: true, partialFilterExpression: { isArchived: false } },
);
