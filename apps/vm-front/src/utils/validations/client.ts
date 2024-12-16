import { z } from 'zod';

export const clientSchema = z.object({
  fullName: z.string().min(1, 'El campo nombre no debe estar vacio'),
  dni: z.string().length(11, 'El campo Carnet de Identidad debe tener 11 Caracteres').regex(/^[0-9]*$/),
  email: z.string().email('El campo no cumple el formato de correo'),
  phone: z.string().length(8, "El numero de telefono debe tener 8 caracteres").regex(/^[0-9]*$/),
  address: z.string()
})

export const clientUpdateSchema = clientSchema.partial()