import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PetDTO, UpdatePetDTO } from './dto/pet_zod';
import { SupabaseService } from 'src/modules/supabase/supabase.service';
import { Express } from 'express';

@Injectable()
export class PetService {
  constructor(
    private prisma: PrismaService,
    private supabase: SupabaseService,
  ) {}
  async getAll(page, includeDeleted) {
    return this.prisma.pet.findMany({
      where: {
        deletedAt: includeDeleted ? undefined : null,
      },
      skip: page * 15,
      take: 15,
    });
  }
  async getById(id: string) {
    return this.prisma.pet.findUnique({
      where: {
        id,
      },
    });
  }
  async create(data: PetDTO, file: Express.Multer.File) {
    const { error, data: fileData } = await this.supabase.client.storage
      .from('medical_records')
      .upload(`/public/${file.filename}`, file.buffer, {
        cacheControl: '3600',
        upsert: true,
      });
    if (error) {
      throw new BadRequestException(error.message);
    }
    const { clientId, ...petData } = data;
    return this.prisma.pet.create({
      data: {
        ...petData,
        medicalRecordPath: fileData.path,
        client: {
          connect: {
            id: clientId,
          },
        },
      },
    });
  }
  async update(id: string, data: UpdatePetDTO) {
    return this.prisma.pet.update({
      where: {
        id,
      },
      data,
    });
  }
  async deletePet(id: string) {
    return this.prisma.pet.delete({
      where: {
        id,
      },
    });
  }
  async softDelete(id: string) {
    return this.prisma.pet.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
