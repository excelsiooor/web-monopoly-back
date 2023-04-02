import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { RoomsEntity } from './room.entity'
import { UserEntity } from './user.entity'

@Entity({ name: 'm_message' })
export class MessagesEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  text: string

  @Column()
  create_at: string

  @ManyToOne(() => UserEntity, user => user.id)
  author: UserEntity

  @ManyToOne(() => RoomsEntity, rooms => rooms.messages)
  room: RoomsEntity
}
