import { Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';
import { AnimalType } from '../enum/animalType';
import { v4 } from 'uuid';

@Entity()
export class Animal {
  @PrimaryKey()
  id: string = v4();

  @Property()
  name: string;

  @Enum(() => AnimalType)
  type: AnimalType;

  @Property()
  price: number;

  @Property({ nullable: true })
  age: number;
}
