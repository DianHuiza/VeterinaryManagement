import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './modules/client/client.module';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [ClientModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
