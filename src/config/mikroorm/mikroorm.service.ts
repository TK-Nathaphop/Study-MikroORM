import {
  MikroOrmModuleOptions,
  MikroOrmOptionsFactory,
} from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MikroOrmConfigService implements MikroOrmOptionsFactory {
  createMikroOrmOptions(): MikroOrmModuleOptions {
    const mikroOrmConfig: MikroOrmModuleOptions = {
      autoLoadEntities: true,
      filters: {
        softDelete: {
          cond: { deletedAt: { $eq: null } },
          args: false,
          default: true,
        },
      },
    };

    return mikroOrmConfig;
  }
}
