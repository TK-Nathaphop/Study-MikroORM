import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { MikroOrmConfigService } from './mikroorm.service';

@Module({
  imports: [MikroOrmModule.forRootAsync({ useClass: MikroOrmConfigService })],
  exports: [MikroOrmModule],
})
export class MikroOrmConfigModule {}
