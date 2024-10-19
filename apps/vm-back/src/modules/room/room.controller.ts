import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { ZodPipe } from 'src/pipes/zod.pipe';
import {
  RoomDTO,
  roomSchema,
  UpdateRoomDTO,
  updateRoomSchema,
} from './dto/room_zod';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  async getAll(
    @Query('page') page: number,
    @Query('includeOutOfService') includeOutOfService: boolean,
  ) {
    this.roomService.getAll(page, includeOutOfService);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    this.roomService.getById(id);
  }

  @Post()
  async create(@Body(new ZodPipe(roomSchema)) newRoom: RoomDTO) {
    this.roomService.create(newRoom);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodPipe(updateRoomSchema)) data: UpdateRoomDTO,
  ) {
    this.roomService.update(id, data);
  }
  @Put(':id/softDelete')
  async softDelete(@Param('id') id: string) {
    this.roomService.softDelete(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.roomService.delete(id);
  }
}
