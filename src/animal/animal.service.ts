import { wrap } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';
import { AnimalRepository } from './repositories/animal.repository';

@Injectable()
export class AnimalService {
  constructor(private readonly animalRepository: AnimalRepository) {}

  create(createAnimalDto: CreateAnimalDto): void {
    const animalEntity = this.animalRepository.create(createAnimalDto);
    this.animalRepository.persist(animalEntity);
    this.animalRepository
      .flush()
      .then(() => console.log('Create animal successfully'))
      .catch((e) => console.log(`Error, cannot create new animal  | ${e}`));
  }

  async findAll(): Promise<Animal[]> {
    return await this.animalRepository.findAll();
  }

  async findOne(id: string): Promise<Animal> {
    return await this.animalRepository.findOne(id);
  }

  update(id: string, updateAnimalDto: UpdateAnimalDto): void {
    this.animalRepository
      .findOneOrFail({ id })
      .then((animal) => {
        animal.age = updateAnimalDto.age;
        wrap(animal).assign(updateAnimalDto);
        this.animalRepository.flush();
        console.log(`Update animal id: ${id} successfully`);
      })
      .catch((e) =>
        console.log(`Error, cannot update animal id: ${id} | ${e}`),
      );
  }

  remove(id: string): void {
    this.animalRepository
      .findOne(id)
      .then((animal) =>
        this.animalRepository
          .softRemoveAndFlush(animal)
          .then(() => console.log(`Remove animal id: ${id} successfully`)),
      )
      .catch((e) =>
        console.log(`Error, cannot remove animal id: ${id} | ${e}`),
      );
  }
}
