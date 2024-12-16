import { z } from 'zod';

export const petSchema = z.object({
  name: z.string().min(3).max(50),
  species: z.string().min(3).max(50),
  breed: z.string().min(3).max(50),
  genre: z.enum(['MALE', 'FEMALE']),
  birthday: z.string().date().transform((val) => (new Date(val)).toISOString()),
  clientId: z.string().uuid(),
})