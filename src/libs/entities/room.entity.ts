import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity({ name: 'rooms' })
export class RoomsEntity {
  @PrimaryColumn('uuid', { unique: true })
  id: string

  @Column()
  owner: number

  @Column({ type: 'integer', array: true, default: [], nullable: true })
  members: number[]
}
