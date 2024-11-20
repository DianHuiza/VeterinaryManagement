import { z } from 'zod';

export const appointmentSchema = z.object({
  reason: z.string(),
  date: z.string().datetime(),
  petId: z.string(),
  serviceId: z.string(),
  roomId: z.string(),
});
export const updateAppointmentSchema = appointmentSchema.omit({ petId: true });

export const clientSchema = z.object({
  id: z.string().uuid(),
  dni: z.string(),
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
});
export const updateClientSchema = clientSchema.partial();

export const employeeSchema = z.object({
  id: z.string().uuid(),
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string().min(8),
  positionId: z.string().uuid(),
  role: z.enum(['ADMIN', 'EMPLOYEE']),
});
export const updateEmployeeSchema = employeeSchema
  .omit({ password: true })
  .partial();

export const optionSchema = z.object({
  key: z.string(),
  value: z.string(),
  type: z.enum(['NUMBER', 'STRING', 'DATE']),
});
export const updateOptionSchema = optionSchema.omit({ type: true });

export const petSchema = z.object({
  name: z.string(),
  species: z.string(),
  breed: z.string(),
  birthday: z.string(),
  clientId: z.string().uuid(),
});
export const updatePetSchema = petSchema.omit({ clientId: true });

export const positionSchema = z.object({
  position: z.string(),
  description: z.string(),
});
export const updatePositionSchema = positionSchema.partial();

export const roomSchema = z.object({
  name: z.string(),
  roomTypeId: z.string().uuid(),
  maxAppointmentsPerDay: z.number(),
  openAt: z.string().datetime(),
  closeAt: z.string().datetime(),
});
export const updateRoomSchema = roomSchema.partial();

export const serviceSchema = z.object({
  name: z.string(),
  price: z.number(),
  description: z.string(),
  roomId: z.string().uuid(),
});
export const updateServiceSchema = serviceSchema.omit({ roomId: true });

export const roomTypeSchema = z.object({
  name: z.string(),
  services: z.array(serviceSchema),
});
export const updateRoomTypeSchema = roomTypeSchema.omit({ services: true });

export type ClientDTO = z.infer<typeof clientSchema>;
export type UpdateClientDTO = z.infer<typeof updateClientSchema>;

export type AppointmentDTO = Required<z.infer<typeof appointmentSchema>>;
export type UpdateAppointmentDTO = z.infer<typeof updateAppointmentSchema>;

export type EmployeeDTO = Required<z.infer<typeof employeeSchema>>;
export type UpdateEmployeeDTO = z.infer<typeof updateEmployeeSchema>;

export type OptionDTO = Required<z.infer<typeof optionSchema>>;
export type UpdateOptionDTO = Required<z.infer<typeof updateOptionSchema>>;

export type PetDTO = Required<z.infer<typeof petSchema>>;
export type UpdatePetDTO = z.infer<typeof updatePetSchema>;

export type PositionDTO = Required<z.infer<typeof positionSchema>>;
export type UpdatePositionDTO = z.infer<typeof updatePositionSchema>;

export type RoomDTO = Required<z.infer<typeof roomSchema>>;
export type UpdateRoomDTO = z.infer<typeof updateRoomSchema>;

export type ServiceDTO = Required<z.infer<typeof serviceSchema>>;
export type UpdateServiceDTO = z.infer<typeof updateServiceSchema>;

export type RoomTypeDTO = {
  name: string;
  services: ServiceDTO[];
};
export type UpdateRoomTypeDTO = z.infer<typeof updateRoomTypeSchema>;