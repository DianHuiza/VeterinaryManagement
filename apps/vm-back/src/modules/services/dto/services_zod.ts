import { z } from 'zod';

export const serviceSchema = z.object({
  name: z.string(),
  price: z.number(),
  description: z.string(),
  roomId: z.string().uuid(),
});

export const updateServiceSchema = serviceSchema.omit({ roomId: true });

export type ServiceDTO = Required<z.infer<typeof serviceSchema>>;
export type UpdateServiceDTO = z.infer<typeof updateServiceSchema>;
