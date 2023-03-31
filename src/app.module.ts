import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserEntity } from './libs/entities/user.entity'
import { RoomsEntity } from './libs/entities/room.entity'
import { RoomsModule, UserModule } from './modules'

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
  imports: [dotEnvConfig, postgreModule, UserModule, RoomsModule],
})
export class AppModule {}
