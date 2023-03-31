import { Entity, Column, PrimaryGeneratedColumn,OneToMany, ManyToOne } from 'typeorm'
import { RoomsEntity } from './room.entity'

@Entity({ name: 'm_message' })
export class MessagesEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  text: string

  @Column()
  create_at: string
  
  @ManyToOne(() => RoomsEntity, rooms => rooms.messages)
  room: RoomsEntity;
}
