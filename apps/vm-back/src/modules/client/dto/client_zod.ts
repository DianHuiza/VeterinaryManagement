import { z } from 'zod';

export const clientSchema = z.object({
  dni: z.string(),
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
});

export const updateClientSchema = clientSchema.partial();

export type ClientDTO = z.infer<typeof clientSchema>;
export type UpdateClientDTO = z.infer<typeof updateClientSchema>;
