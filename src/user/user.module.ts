import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'src/libs/entities/user.entity'
import { UserController } from './user.controller'
import { AuthService } from './services/auth.service'
import { UserService } from './services/user.service'
import { TokenService } from 'src/services/jwt.service'
import { JwtModule } from '@nestjs/jwt'

const userRepository = TypeOrmModule.forFeature([UserEntity])

const JWTModule = JwtModule.registerAsync({
  useFactory: () => ({
    secret: process.env.SECRET,
  }),
})

@Module({
  imports: [userRepository, JWTModule],
  controllers: [UserController],
  providers: [TokenService, AuthService, UserService],
})
export class UserModule {}
