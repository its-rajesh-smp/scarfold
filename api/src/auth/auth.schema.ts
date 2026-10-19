import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v7 as uuid } from 'uuid';

export type AuthDocument = HydratedDocument<Auth>;

@Schema({ timestamps: true, id: true })
export class Auth {
  @Prop({ type: String, default: () => uuid() })
  _id: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);

// Never send the password hash in API responses
AuthSchema.set('toJSON', {
  transform: (_doc, ret: Partial<Auth>) => {
    delete ret.password;
    return ret;
  },
});
