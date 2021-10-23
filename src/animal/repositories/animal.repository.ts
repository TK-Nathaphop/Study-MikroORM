import { EntityRepository, Repository } from '@mikro-orm/core';
import { Animal } from '../entities/animal.entity';

@Repository(Animal)
export class AnimalRepository extends EntityRepository<Animal> {}
