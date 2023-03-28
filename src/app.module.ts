import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { UserEntity } from './libs/entities/user.entity'
import { RoomsEntity } from './libs/entities/room.entity'

const dotEnvConfig = ConfigModule.forRoot({ envFilePath: '.env' })

const postgreModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'web-monopoly',
  entities: [UserEntity, RoomsEntity],
  synchronize: true,
})

@Module({
  imports: [dotEnvConfig, UserModule, postgreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
