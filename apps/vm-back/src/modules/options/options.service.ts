import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { UpdateOptionDTO } from './dto/options_zod';

@Injectable()
export class OptionsService {
  private readonly parsers = {
    STRING: (value: string) => value,
    NUMBER: (value: string) => Number(value),
    BOOLEAN: (value: string) => value === 'true',
    DATE: (value: string) => new Date(value),
  };
  constructor(private prisma: PrismaService) {}
  async getOptions() {
    const optionsList = await this.prisma.options.findMany();
    const optionsObject: Record<string, any> = {};
    for (const option of optionsList) {
      optionsObject[option.key] = this.parsers[option.type](option.value);
    }
    return optionsObject;
  }
  async setOption(option: UpdateOptionDTO) {
    const optionExists = await this.prisma.options.findFirst({
      where: {
        key: option.key,
      },
    });

    if (!optionExists) throw new BadRequestException('Option does not exist');

    try {
      this.parsers[optionExists.type](option.value);
    } catch (e) {
      throw new BadRequestException('Invalid value:' + e.message);
    }

    return this.prisma.options.update({
      where: {
        key: option.key,
      },
      data: {
        value: option.value,
      },
    });
  }
}
