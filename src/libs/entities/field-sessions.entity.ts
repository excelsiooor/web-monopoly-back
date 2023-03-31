import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'm_field_session' })
export class FieldSessionsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  definition: number

  @Column()
  owner_player: number
}
