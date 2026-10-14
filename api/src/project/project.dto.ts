import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateProjectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  description: z.string().optional(),
});

export const UpdateProjectSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

export class CreateProjectDto extends createZodDto(CreateProjectSchema) {}
export class UpdateProjectDto extends createZodDto(UpdateProjectSchema) {}
