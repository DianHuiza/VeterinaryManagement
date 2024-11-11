import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
  imports: [PrismaModule],
})
export class EmployeeModule {}
