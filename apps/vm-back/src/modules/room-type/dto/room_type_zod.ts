import { z } from 'zod';

export const serviceSchema = z.object({
  name: z.string(),
  price: z.number(),
  description: z.string(),
});

export type ServiceDTO = Required<z.infer<typeof serviceSchema>>;

export const roomTypeSchema = z.object({
  name: z.string(),
  services: z.array(serviceSchema),
});

export const updateRoomTypeSchema = z.object({
  name: z.string(),
});

export type RoomTypeDTO = {
  name: string;
  services: ServiceDTO[];
};

export type UpdateRoomTypeDTO = z.infer<typeof updateRoomTypeSchema>;
