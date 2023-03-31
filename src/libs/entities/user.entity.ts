import { RoomsEntity } from './room.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'

@Entity({ name: 'm_user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  image: string

  @ManyToOne(() => RoomsEntity, rooms => rooms.users)
  room: RoomsEntity
}
