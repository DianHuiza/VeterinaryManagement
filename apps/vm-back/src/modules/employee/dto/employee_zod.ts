import { z } from 'zod';
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

export type EmployeeDTO = Required<z.infer<typeof employeeSchema>>;
export type UpdateEmployeeDTO = z.infer<typeof updateEmployeeSchema>;
