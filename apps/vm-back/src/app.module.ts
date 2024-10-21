import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './modules/client/client.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { RoomModule } from './modules/room/room.module';
import { RoomTypeModule } from './modules/room-type/room-type.module';
import { ServicesModule } from './modules/services/services.module';

@Module({
  imports: [
    ClientModule,
    EmployeeModule,
    RoomModule,
    ServicesModule,
    RoomTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
