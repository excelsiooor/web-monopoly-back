import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'fieldSessions' })
export class FieldSessionsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  definition: number

  @Column()
  owner_player: number
}
