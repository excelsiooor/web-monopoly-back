import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RoomsEntity } from 'src/libs/entities/room.entity'
import { RoomsService } from './services/rooms.service'
import { RoomsController } from './rooms.cotroller'
import { TokenService } from 'src/services/jwt.service'
import { JwtModule } from '@nestjs/jwt'

const roomsRepository = TypeOrmModule.forFeature([RoomsEntity])

const JWTModule = JwtModule.registerAsync({
  useFactory: () => ({
    secret: process.env.SECRET,
  }),
})

@Module({
  imports: [roomsRepository, JWTModule],
  controllers: [RoomsController],
  providers: [TokenService, RoomsService],
})
export class RoomsModule {}
