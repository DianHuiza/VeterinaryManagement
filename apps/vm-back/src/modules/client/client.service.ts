import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}
  async getAllClients(page: number, includeDeleted: boolean) {
    return this.prisma.client.findMany({
      skip: page * 15,
      take: 15,
      where: {
        deletedAt: includeDeleted ? undefined : { not: null },
      },
    });
  }

  async getClientById(id: string) {
    return this.prisma.client.findUnique({
      where: {
        id,
      },
    });
  }

  async createClient(client: any) {
    return this.prisma.client.create({
      data: client,
    });
  }

  async updateClient(id: string, client: Prisma.ClientUpdateInput) {
    return this.prisma.client.update({
      where: {
        id,
      },
      data: client,
    });
  }

  async deleteClient(id: string) {
    return this.prisma.client.delete({
      where: {
        id,
      },
    });
  }

  async softDeleteClient(id: string) {
    return this.prisma.client.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
