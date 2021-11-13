import { AnimalType } from '../enum/animalType';

export class CreateAnimalDto {
  name: string;
  type: AnimalType;
  price: number;
  age: number;
  size: number;
}
