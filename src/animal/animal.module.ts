import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Animal } from './entities/animal.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Animal])],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
