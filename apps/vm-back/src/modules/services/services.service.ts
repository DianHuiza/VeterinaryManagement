import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { ServiceDTO, UpdateServiceDTO } from './dto/services_zod';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}
  async create(data: ServiceDTO) {
    const { roomId, ...rest } = data;
    return this.prisma.service.create({
      data: {
        ...rest,
        room: {
          connect: {
            id: roomId,
          },
        },
      },
    });
  }
  async update(id: string, data: UpdateServiceDTO) {
    return this.prisma.service.update({
      where: { id },
      data,
    });
  }
  async deleteService(id) {
    return this.prisma.service.delete({ where: { id } });
  }
}
