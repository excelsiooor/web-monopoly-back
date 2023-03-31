import { Entity, Column, OneToMany, BeforeInsert, PrimaryColumn } from 'typeorm'
import { FieldSessionsEntity } from './field-sessions.entity'
import { v4 as uuid } from 'uuid'

@Entity({ name: 'm_game_sessions' })
export class GameSessionsEntity {
  @PrimaryColumn('uuid', { unique: true })
  id: string

  @BeforeInsert()
  generateUUID() {
    this.id = uuid()
  }

  @Column()
  room: string

  @OneToMany(() => FieldSessionsEntity, fieldSession => fieldSession)
  fields: FieldSessionsEntity[]

  @Column({ type: 'integer', array: true, default: [], nullable: true })
  members: number[]
}
