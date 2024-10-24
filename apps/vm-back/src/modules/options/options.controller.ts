import { Body, Controller, Get, Post } from '@nestjs/common';
import { OptionsService } from './options.service';
import { UpdateOptionDTO } from './dto/options_zod';

@Controller('options')
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) {}
  @Get()
  getOptions() {
    return this.optionsService.getOptions();
  }
  @Post()
  setOption(@Body() option: UpdateOptionDTO) {
    return this.optionsService.setOption(option);
  }
}
