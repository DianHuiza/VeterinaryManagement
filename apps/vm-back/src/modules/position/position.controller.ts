import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PositionService } from './position.service';
import { ZodPipe } from 'src/pipes/zod.pipe';
import {
  PositionDTO,
  PositionSchema,
  UpdatePositionDTO,
} from './dto/position_zod';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}
  @Get()
  async getAll() {
    return this.positionService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.positionService.getById(id);
  }
  @Post()
  async create(@Body(new ZodPipe(PositionSchema)) data: PositionDTO) {
    return this.positionService.create(data);
  }
  @Put()
  async update(
    @Param('id') id: string,
    @Body(new ZodPipe(PositionSchema)) data: UpdatePositionDTO,
  ) {
    return this.positionService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.positionService.deletePosition(id);
  }
}
