import { z } from 'zod';

export const optionSchema = z.object({
  key: z.string(),
  value: z.string(),
  type: z.enum(['NUMBER', 'STRING', 'DATE']),
});

export const updateOptionSchema = optionSchema.omit({ type: true });

export type OptionDTO = Required<z.infer<typeof optionSchema>>;
export type UpdateOptionDTO = Required<z.infer<typeof updateOptionSchema>>;
