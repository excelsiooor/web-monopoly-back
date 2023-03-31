import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'm_field_definition' })
export class FieldDefinitionsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  type: string

  @Column()
  catrgory: string

  @Column('double precision')
  base_rent: number
}
