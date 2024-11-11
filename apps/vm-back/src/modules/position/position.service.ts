import { Injectable } from '@nestjs/common';
import { PositionDTO, UpdatePositionDTO } from './dto/position_zod';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PositionService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    return this.prisma.position.findMany();
  }
  async getById(id: string) {
    return this.prisma.position.findUnique({
      where: {
        id,
      },
    });
  }
  async create(data: PositionDTO) {
    return this.prisma.position.create({
      data,
    });
  }
  async update(id: string, data: UpdatePositionDTO) {
    return this.prisma.position.update({
      where: {
        id,
      },
      data,
    });
  }
  async deletePosition(id: string) {
    return this.prisma.position.delete({
      where: {
        id,
      },
    });
  }
}
