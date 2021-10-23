import { Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';
import { AnimalType } from '../enum/animalType';

@Entity()
export class Animal {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Enum(() => AnimalType)
  type: AnimalType;

  @Property()
  price: number;

  @Property({ nullable: true })
  age: number;
}
