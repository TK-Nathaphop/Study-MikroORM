import { v4 } from 'uuid';
import { Index, PrimaryKey, Property } from '@mikro-orm/core';
import { Exclude } from 'class-transformer';

export abstract class BaseEntity {
  @PrimaryKey()
  id: string = v4();

  @Exclude()
  @Property()
  createdAt: Date = new Date();

  @Exclude()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Index()
  @Property({ nullable: true })
  deletedAt?: Date;
}
