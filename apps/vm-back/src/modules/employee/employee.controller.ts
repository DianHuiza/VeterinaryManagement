import {
  Controller,
  Put,
  Body,
  Get,
  Param,
  Post,
  Query,
  Patch,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { ZodPipe } from 'src/pipes/zod.pipe';
import { employeeSchema } from './dto/employee_zod';
import {
  EmployeeDTO,
  UpdateEmployeeDTO,
  updateEmployeeSchema,
} from './dto/employee_zod';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getAllEmployees(
    @Query('page') page: number,
    @Query('includeDeleted') includeDeleted: boolean,
  ) {
    return this.employeeService.getAllEmployees(page, includeDeleted);
  }

  @Get(':id')
  async getEmployeeById(@Param('id') id: string) {
    return this.employeeService.getEmployeeById(id);
  }

  @Post()
  async createEmployee(
    @Body(new ZodPipe(employeeSchema)) employee: EmployeeDTO,
  ) {
    const { positionId, ...rest } = employee;
    return this.employeeService.createEmployee({
      ...rest,
      position: {
        connect: {
          id: positionId,
        },
      },
    });
  }

  @Put(':id')
  async updateEmployee(
    @Param('id') id: string,
    @Body(new ZodPipe(updateEmployeeSchema)) employee: UpdateEmployeeDTO,
  ) {
    const { positionId, ...rest } = employee;
    return this.employeeService.updateEmployee(id, {
      ...rest,
      position: {
        connect: {
          id: positionId,
        },
      },
    });
  }

  @Patch(':id')
  changePasssword(@Body() body, @Param('id') id) {
    const { oldPassword, newPassword } = body;
    this.employeeService.changePassword(id, oldPassword, newPassword);
  }
}
