import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  async getAll(page, includeOutOfService) {
    return this.prisma.room.findMany({
      where: {
        outOfServiceAt: includeOutOfService ? undefined : null,
      },
      take: 15,
      skip: page * 15,
    });
  }
  async getById(id) {
    return this.prisma.room.findUnique({
      where: {
        id,
      },
    });
  }
  async create(newRoom) {
    const { roomTypeId, ...data } = newRoom;
    return this.prisma.room.create({
      data: {
        ...data,
        roomType: {
          connect: {
            id: roomTypeId,
          },
        },
      },
    });
  }
  update(id, data) {
    const { roomTypeId, ...updateData } = data;
    return this.prisma.room.update({
      where: {
        id,
      },
      data: {
        ...updateData,
        roomType: {
          connect: {
            id: roomTypeId,
          },
        },
      },
    });
  }
  softDelete(id) {
    return this.prisma.room.update({
      where: {
        id,
      },
      data: {
        outOfServiceAt: new Date(),
      },
    });
  }
  delete(id) {
    return this.prisma.room.delete({
      where: {
        id,
      },
    });
  }
}
