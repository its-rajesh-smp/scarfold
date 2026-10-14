import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v7 as uuid } from 'uuid';

@Schema({ timestamps: true, id: true })
export class Project {
  @Prop({ type: String, default: () => uuid() })
  _id: string;

  @Prop({ required: true, type: String })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String, ref: 'Auth', required: true })
  userId: string;

  @Prop({ type: Boolean, default: false })
  isArchived: boolean;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
