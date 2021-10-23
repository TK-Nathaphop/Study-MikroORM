import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';
import { ConfigModule } from '@nestjs/config';
import { MikroOrmConfigModule } from './config/mikroorm/mikroorm.module';

@Module({
  imports: [ConfigModule.forRoot(), MikroOrmConfigModule, AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
