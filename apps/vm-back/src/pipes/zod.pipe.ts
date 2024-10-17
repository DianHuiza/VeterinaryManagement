import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';

@Injectable()
export class ZodPipe implements PipeTransform {
  constructor(private schema: ZodSchema<any>) {}

  transform(value: any) {
    let validated;
    try {
      validated = this.schema.safeParse(value);
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        throw new BadRequestException(err.issues[0].message);
      }
    }
    return validated;
  }
}
