import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PetService } from './pet.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { PetDTO, petSchema } from './dto/pet_zod';
import { ZodPipe } from 'src/pipes/zod.pipe';
import { randomUUID } from 'crypto';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}
  @Get()
  getAll(@Param('page') page, @Param('includeDeleted') includeDeleted) {
    return this.petService.getAll(page, includeDeleted);
  }
  @Get(':id')
  getOne(@Param('id') id) {
    return this.petService.getById(id);
  }
  @Post()
  @UseInterceptors(FileInterceptor('medicalRecord'))
  create(
    @Body(new ZodPipe(petSchema)) pet: PetDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      const mdFileName = `${pet.name}.md`;
      const buffer = Buffer.from('', 'utf8');
      file = {
        fieldname: 'medicalRecord',
        originalname: mdFileName,
        encoding: '7bit',
        mimetype: 'text/markdown',
        buffer: buffer,
        stream: undefined,
        destination: '',
        filename: mdFileName,
        path: '',
        size: 0,
      };
    }
    file.filename = `${pet.name}-${randomUUID()}.md`;
    return this.petService.create(pet, file);
  }
  @Put(':id')
  update(@Param('id') id, @Body() pet) {
    return this.petService.update(id, pet);
  }

  @Delete(':id')
  deletePet(@Param('id') id) {
    return this.petService.deletePet(id);
  }

  @Put('softDelete/:id')
  softDelete(@Param('id') id) {
    return this.petService.softDelete(id);
  }
}
