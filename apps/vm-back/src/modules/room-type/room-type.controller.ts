import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RoomTypeService } from './room-type.service';
import { ZodPipe } from 'src/pipes/zod.pipe';
import {
  RoomTypeDTO,
  roomTypeSchema,
  UpdateRoomTypeDTO,
  updateRoomTypeSchema,
} from './dto/room_type_zod';

@Controller('room-type')
export class RoomTypeController {
  constructor(private readonly roomTypeService: RoomTypeService) {}
  @Get()
  async getAll() {
    return this.roomTypeService.getAll();
  }
  @Get(':id')
  async getRoomsByTypeId(@Param('id') id) {
    return this.roomTypeService.getRoomsByTypeId(id);
  }
  @Post()
  async create(@Body(new ZodPipe(roomTypeSchema)) roomType: RoomTypeDTO) {
    return this.roomTypeService.createRoomType(roomType);
  }
  @Put(':id')
  async update(
    @Body(new ZodPipe(updateRoomTypeSchema)) roomType: UpdateRoomTypeDTO,
    @Param('id') id: string,
  ) {
    return this.roomTypeService.updateRoomType(id, roomType);
  }
  @Delete(':id')
  async deleteType(@Param(':id') id: string) {
    this.roomTypeService.delete(id);
  }
}
