import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { AppointmentDTO, UpdateAppointmentDTO } from './dto/appointment_zod';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}
  async getAll(page, includeDeleted) {
    return this.prisma.appointment.findMany({
      where: {
        canceledAt: includeDeleted ? undefined : null,
      },
      skip: page * 15,
      take: 15,
    });
  }
  async todayAppointments() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return this.prisma.appointment.findMany({
      where: {
        date: {
          gte: today,
          lt: tomorrow,
        },
      },
    });
  }
  async missedAppointments(page, includeDeleted) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.prisma.appointment.findMany({
      where: {
        date: {
          lt: today,
        },
        canceledAt: includeDeleted ? undefined : null,
      },
      skip: page * 15,
      take: 15,
    });
  }
  async pendingAppointments(page, includeDeleted) {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    return this.prisma.appointment.findMany({
      where: {
        date: {
          gte: today,
        },
        canceledAt: includeDeleted ? undefined : null,
      },
      skip: page * 15,
      take: 15,
    });
  }
  async getById(id: string) {
    return this.prisma.appointment.findUnique({
      where: {
        id,
      },
    });
  }
  async create(data: AppointmentDTO) {
    return this.prisma.appointment.create({
      data: {
        date: data.date,
        reason: data.reason,
        pet: {
          connect: {
            id: data.petId,
          },
        },
        service: {
          connect: {
            id: data.serviceId,
          },
        },
        room: {
          connect: {
            id: data.roomId,
          },
        },
      },
    });
  }
  async update(id: string, data: UpdateAppointmentDTO) {
    const updateData: Prisma.AppointmentUpdateInput = {
      reason: data.reason,
      date: data.date,
    };
    if (data.roomId) {
      updateData.room = { connect: { id: data.roomId } };
    }
    if (data.serviceId) {
      updateData.service = { connect: { id: data.serviceId } };
    }

    return this.prisma.appointment.update({
      where: {
        id,
      },
      data,
    });
  }
  async deleteAppointment(id: string) {
    return this.prisma.appointment.delete({
      where: {
        id,
      },
    });
  }
  async softDelete(id: string) {
    return this.prisma.appointment.update({
      where: {
        id,
      },
      data: {
        canceledAt: new Date(),
      },
    });
  }
}
