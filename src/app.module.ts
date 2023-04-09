import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { postgreModule } from './config/postgre-db.config'
import { RoomsModule, UserModule } from './modules'
import { GameSessionModule } from './modules/game-session/game-session.module'

const dotEnvConfig = ConfigModule.forRoot({ envFilePath: '.env' })

@Module({
  imports: [dotEnvConfig, postgreModule, UserModule, RoomsModule, GameSessionModule],
})
export class AppModule {}
