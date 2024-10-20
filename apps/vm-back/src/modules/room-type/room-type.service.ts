import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RoomTypeDTO, UpdateRoomTypeDTO } from './dto/room_type_zod';

@Injectable()
export class RoomTypeService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    return this.prisma.roomType.findMany();
  }
  async getRoomsByTypeId(id) {
    return this.prisma.roomType.findMany({
      where: { id },
      include: {
        rooms: true,
      },
    });
  }
  async createRoomType(data: RoomTypeDTO) {
    return this.prisma.roomType.create({
      data: {
        name: data.name,
        services: {
          createMany: {
            data: data.services,
          },
        },
      },
    });
  }
  async updateRoomType(id, data: UpdateRoomTypeDTO) {
    return this.prisma.roomType.update({
      where: { id },
      data,
    });
  }
  async delete(id) {
    return this.prisma.roomType.delete({ where: { id } });
  }
}
