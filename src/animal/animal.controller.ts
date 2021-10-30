import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  create(@Body() createAnimalDto: CreateAnimalDto): void {
    return this.animalService.create(createAnimalDto);
  }

  @Get()
  async findAll(): Promise<Animal[]> {
    return await this.animalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Animal> {
    return await this.animalService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ): void {
    return this.animalService.update(id, updateAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.animalService.remove(id);
  }
}
