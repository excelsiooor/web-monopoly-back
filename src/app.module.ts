import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/user.module';
import { UserEntity } from './libs/entities/user.entity';

const dotEnvConfig = ConfigModule.forRoot({ envFilePath: '.env' })

const postgreModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'web-monopoly',
  entities: [UserEntity],
  synchronize: true,
})

@Module({
  imports: [dotEnvConfig, AuthModule, postgreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
