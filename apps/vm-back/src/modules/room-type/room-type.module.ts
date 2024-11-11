import { Module } from '@nestjs/common';
import { RoomTypeService } from './room-type.service';
import { RoomTypeController } from './room-type.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [RoomTypeController],
  providers: [RoomTypeService],
  imports: [PrismaModule],
})
export class RoomTypeModule {}
