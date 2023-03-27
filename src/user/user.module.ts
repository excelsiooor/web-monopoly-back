import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'src/libs/entities/user.entity'
import { AuthController } from './user.controller'
import { AuthService } from './services/auth.service'
import { TokenService } from './services/jwt.service'
import { JwtModule } from '@nestjs/jwt'

const userRepository = TypeOrmModule.forFeature([UserEntity])

const JWTModule = JwtModule.registerAsync({
  useFactory: () => ({
    secret: process.env.SECRET,
  }),
})

@Module({
  imports: [userRepository, JWTModule],
  controllers: [AuthController],
  providers: [TokenService, AuthService],
})
export class UserModule {}
