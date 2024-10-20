import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ZodPipe } from 'src/pipes/zod.pipe';
import {
  ServiceDTO,
  serviceSchema,
  UpdateServiceDTO,
  updateServiceSchema,
} from './dto/services_zod';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}
  @Post()
  async create(@Body(new ZodPipe(serviceSchema)) service: ServiceDTO) {
    return this.servicesService.create(service);
  }
  @Put(':id')
  async update(
    @Body(new ZodPipe(updateServiceSchema)) service: UpdateServiceDTO,
    @Param('id') id: string,
  ) {
    return this.servicesService.update(id, service);
  }
  @Delete(':id')
  async deleteService(@Param('id') id: string) {
    return this.servicesService.deleteService(id);
  }
}
