import { Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserDTO } from '../dto/user.dto'
import { UserEntity } from '../../libs/entities/user.entity'

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}
  async validateUser(user: UserDTO) {
    const candidate = await this.userRepository.findOneBy({ email: user.email })

    if (candidate) {
      return candidate
    }

    const newUser = this.userRepository.create({ ...user })

    return this.userRepository.save(newUser)
  }
}
