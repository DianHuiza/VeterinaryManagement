import { z } from 'zod';

export const petSchema = z.object({
  name: z.string(),
  species: z.string(),
  breed: z.string(),
  birthday: z.string(),
  clientId: z.string().uuid(),
});

export const updatePetSchema = petSchema.omit({ clientId: true });

export type PetDTO = Required<z.infer<typeof petSchema>>;
export type UpdatePetDTO = z.infer<typeof updatePetSchema>;
