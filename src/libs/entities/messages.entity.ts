import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'messages' })
export class MessagesEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  text: string

  @Column()
  create_at: string

  @Column()
  user_id: number
}
