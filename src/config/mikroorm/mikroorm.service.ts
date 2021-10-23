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
    };

    return mikroOrmConfig;
  }
}
