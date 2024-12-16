import { z } from 'zod';

export const appointmentSchema = z.object({
  reason: z.string(),
  initDate: z.string().datetime(),
  endDate: z.string().datetime(),
  petId: z.string(),
  serviceId: z.string(),
  roomId: z.string(),
});

export const updateAppointmentSchema = appointmentSchema.omit({ petId: true });

export type AppointmentDTO = Required<z.infer<typeof appointmentSchema>>;
export type UpdateAppointmentDTO = z.infer<typeof updateAppointmentSchema>;
