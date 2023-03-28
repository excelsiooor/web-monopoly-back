import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'rooms' })
export class RoomsEntity {
  @PrimaryGeneratedColumn()
  primaryId: number

  @Column()
  id: string

  @Column()
  owner: string
}
