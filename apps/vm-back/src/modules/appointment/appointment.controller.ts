import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}
  @Get()
  async getAll(@Param() page, @Param() includeDeleted) {
    return this.appointmentService.getAll(page, includeDeleted);
  }
  @Get('today')
  async todayAppointments() {
    return this.appointmentService.todayAppointments();
  }
  @Get('missed')
  async missedAppointments(@Param() page, @Param() includeDeleted) {
    return this.appointmentService.missedAppointments(page, includeDeleted);
  }
  @Get('pending')
  async pendingAppointments(@Param() page, @Param() includeDeleted) {
    return this.appointmentService.pendingAppointments(page, includeDeleted);
  }
  @Get(':id')
  async getById(@Param('id') id) {
    return this.appointmentService.getById(id);
  }
  @Post()
  async create(@Body() appointment) {
    return this.appointmentService.create(appointment);
  }
  @Put(':id')
  async update(@Param('id') id, @Body() appointment) {
    return this.appointmentService.update(id, appointment);
  }
  @Delete(':id')
  async deleteAppointment(@Param('id') id) {
    return this.appointmentService.deleteAppointment(id);
  }
  @Put('softDelete/:id')
  async softDelete(@Param('id') id) {
    return this.appointmentService.softDelete(id);
  }
}
