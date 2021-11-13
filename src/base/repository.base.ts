import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { BaseEntity } from './entity.base';

export class BaseRepositroy<T extends BaseEntity> extends EntityRepository<T> {
  softRemove(entity: T): EntityManager {
    entity.deletedAt = new Date();
    this.persist(entity);
    return this.em;
  }

  async softRemoveAndFlush(entity: T): Promise<void> {
    entity.deletedAt = new Date();
    await this.persistAndFlush(entity);
  }
}
