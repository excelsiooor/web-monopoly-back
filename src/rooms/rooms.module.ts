import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { RoomsEntity } from 'src/libs/entities/room.entity'
import { TokenService } from 'src/user/services/jwt.service'
import { RoomsService } from './services/rooms.service'
import { RoomsController } from './rooms.cotroller'

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
