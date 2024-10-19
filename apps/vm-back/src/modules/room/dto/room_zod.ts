import { z } from 'zod';

export const roomSchema = z.object({
  name: z.string(),
  roomTypeId: z.string().uuid(),
  maxAppointmentsPerDay: z.number(),
  openAt: z.string().datetime(),
  closeAt: z.string().datetime(),
});

export const updateRoomSchema = roomSchema.partial();

export type RoomDTO = Required<z.infer<typeof roomSchema>>;
export type UpdateRoomDTO = z.infer<typeof updateRoomSchema>;
