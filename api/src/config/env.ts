import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  MONGODB_URI: z.url(),
  BCRYPT_SALT_ROUNDS: z.coerce.number().default(10),
});

export type Env = z.infer<typeof envSchema>;
