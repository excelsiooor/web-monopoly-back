import { Injectable, Param } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { RoomsEntity } from 'src/libs/entities/room.entity'
import { UserEntity } from 'src/libs/entities/user.entity'
import { Repository } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(RoomsEntity) private readonly roomsRepository: Repository<RoomsEntity>,
  ) {}

  async createRoom(email: string) {
    const generatedId = uuidv4()

    const newRoom = this.roomsRepository.create({
      id: generatedId,
      owner: email,
    })

    this.roomsRepository.save(newRoom)

    return { id: generatedId }
  }

  async getRoomById(id: string) {
    const room = this.roomsRepository.findOneBy({ id })

    return { room }
  }
}