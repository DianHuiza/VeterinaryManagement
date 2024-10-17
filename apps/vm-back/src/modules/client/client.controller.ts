import { Controller } from '@nestjs/common';
import { ClientService } from './client.service';
import { Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ZodPipe } from 'src/pipes/zod.pipe';
import {
  ClientDTO,
  clientSchema,
  UpdateClientDTO,
  updateClientSchema,
} from './dto/client_zod';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async getAllClients(@Query() query) {
    const { page, includeDeleted = false } = query;
    return this.clientService.getAllClients(page, includeDeleted);
  }

  @Get(':id')
  async getClientById(@Param('id') id) {
    return this.clientService.getClientById(id);
  }

  @Post()
  async createClient(@Body(new ZodPipe(clientSchema)) client: ClientDTO) {
    return this.clientService.createClient(client);
  }

  @Put(':id')
  async updateClient(
    @Body(new ZodPipe(updateClientSchema)) client: UpdateClientDTO,
    @Param('id') id,
  ) {
    return this.clientService.updateClient(id, client);
  }

  @Delete(':id')
  async deleteClient(@Param('id') id) {
    return this.clientService.deleteClient(id);
  }

  @Put(':id')
  async softDeleteClient(@Param('id') id) {
    return this.clientService.softDeleteClient(id);
  }
}
