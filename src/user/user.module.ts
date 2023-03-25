import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/libs/entities/user.entity';
import { AuthController } from './user.controller';
import { GoogleService } from './services/google.service';
import { AuthService } from './services/auth.service';

const userRepository = TypeOrmModule.forFeature([UserEntity])

@Module({
  imports: [userRepository],
  controllers: [AuthController],
  providers: [GoogleService, {
    provide: 'AUTH_SERVICE',
    useClass: AuthService,
  }],
})
export class UserModule {}
