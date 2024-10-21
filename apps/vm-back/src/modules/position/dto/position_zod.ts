import { z } from 'zod';

export const PositionSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export type PositionDTO = Required<z.infer<typeof PositionSchema>>;
export type UpdatePositionDTO = z.infer<typeof PositionSchema>;