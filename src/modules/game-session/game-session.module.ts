import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RoomsEntity } from 'src/libs/entities/room.entity'
import { GameSessionGateway } from './gateway/game-session.gateway'

const roomsRepository = TypeOrmModule.forFeature([RoomsEntity])

@Module({
  providers: [GameSessionGateway],
})
export class GameSessionModule {}
