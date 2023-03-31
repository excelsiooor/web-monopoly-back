import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'fieldDefinitions' })
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
