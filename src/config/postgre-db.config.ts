import { TypeOrmModule } from '@nestjs/typeorm'
import * as entities from '../libs/entities'

const importsEntities = Object.values(entities)

export const postgreModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'web-monopoly',
  entities: [...importsEntities],
  synchronize: true,
})
