import { Entity, Enum, Property } from '@mikro-orm/core';
import { AnimalType } from '../enum/animalType';
import { BaseEntity } from 'src/base/entity.base';

@Entity()
export class Animal extends BaseEntity {
  @Property()
  name: string;

  @Enum(() => AnimalType)
  type: AnimalType;

  @Property()
  price: number;

  @Property({ nullable: true })
  age?: number;

  @Property({ nullable: true })
  size?: number;
}
