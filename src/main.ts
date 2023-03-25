import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = process.env.PORT || 4000

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true})

  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())
  // app.enableCors()

  await app.listen(PORT)
}

bootstrap()
