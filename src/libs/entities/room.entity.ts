import { UserEntity } from 'src/libs/entities/user.entity'
import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm'
import { MessagesEntity } from './messages.entity'

@Entity({ name: 'm_room' })
export class RoomsEntity {
  @PrimaryColumn('uuid', { unique: true })
  id: string

  @Column()
  owner: number

  @OneToMany(() => UserEntity, user => user.room)
  users: UserEntity[]

  @OneToMany(() => MessagesEntity, messages => messages.room)
  messages: MessagesEntity[]
}
