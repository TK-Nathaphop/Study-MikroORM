import { Repository } from '@mikro-orm/core';
import { BaseRepositroy } from 'src/base/repository.base';
import { Animal } from '../entities/animal.entity';

@Repository(Animal)
export class AnimalRepository extends BaseRepositroy<Animal> {}
