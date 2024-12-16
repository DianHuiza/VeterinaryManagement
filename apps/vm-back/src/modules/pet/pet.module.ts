import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { SupabaseModule } from '../supabase/supabase.module';
import { TemplatesModule } from '../templates/templates.module';

@Module({
  controllers: [PetController],
  providers: [PetService],
  imports: [PrismaModule, SupabaseModule, TemplatesModule],
})
export class PetModule {}
