import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { FieldType } from './field.schema.js';

const fieldKey = z
  .string()
  .regex(
    /^[a-zA-Z][a-zA-Z0-9_]*$/,
    'Key must start with a letter and use only letters, numbers and underscores',
  )
  .max(64, 'Key must be at most 64 characters');

export const CreateFieldSchema = z.object({
  label: z.string().trim().min(1, 'Field label is required'),
  key: fieldKey,
  type: z.enum(FieldType),
  isRequired: z.boolean().optional(),
});

export const UpdateFieldSchema = z.object({
  label: z.string().trim().min(1, 'Field label is required').optional(),
  key: fieldKey.optional(),
  type: z.enum(FieldType).optional(),
  isRequired: z.boolean().optional(),
});

export class CreateFieldDto extends createZodDto(CreateFieldSchema) {}
export class UpdateFieldDto extends createZodDto(UpdateFieldSchema) {}

export type CreateFieldInput = z.infer<typeof CreateFieldSchema>;
export type UpdateFieldInput = z.infer<typeof UpdateFieldSchema>;
