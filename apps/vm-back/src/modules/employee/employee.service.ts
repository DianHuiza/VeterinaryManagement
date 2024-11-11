import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { compareSync, hashSync } from 'bcrypt';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async getAllEmployees(page: number, includeDeleted: boolean) {
    return this.prisma.employee.findMany({
      skip: page * 15,
      take: 15,
      where: {
        deletedAt: includeDeleted ? undefined : { not: null },
      },
      select: {
        password: false,
      },
    });
  }

  async getEmployeeById(id: string) {
    return this.prisma.employee.findUnique({
      where: {
        id,
      },
      select: {
        password: false,
      },
    });
  }

  async createEmployee(employee: Prisma.EmployeeCreateInput) {
    return this.prisma.employee.create({
      data: {
        ...employee,
        password: hashSync(employee.password, 10),
      },
    });
  }

  async updateEmployee(id: string, employee: Prisma.EmployeeUpdateInput) {
    return this.prisma.employee.update({
      where: {
        id,
      },
      data: employee,
    });
  }

  async deleteEmployee(id: string) {
    return this.prisma.employee.delete({
      where: {
        id,
      },
    });
  }

  async softDeleteEmployee(id: string) {
    return this.prisma.employee.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async changePassword(id: string, oldPassword: string, newPassword: string) {
    const employee = await this.prisma.employee.findFirst({
      where: {
        id,
      },
      select: {
        password: true,
      },
    });

    if (!employee) {
      throw new BadRequestException(`Employee with id: ${id} doesn't ecxist`);
    }
    if (!compareSync(employee.password, oldPassword)) {
      throw new BadRequestException("The Passwords don't match");
    }
    return this.prisma.employee.update({
      where: {
        id,
      },
      data: {
        password: newPassword,
      },
    });
  }
}
