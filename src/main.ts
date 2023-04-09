import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { IoAdapter } from '@nestjs/platform-socket.io'
import * as socketio from 'socket.io'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'

const PORT = process.env.PORT || 4000

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      allowedHeaders: '*',
      origin: '*',
      credentials: true,
    },
  })

  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())
  const corsOptions: CorsOptions = {
    origin: '*', // Allow all origins, or use a specific domain, e.g. 'http://localhost:3000'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, X-Custom-Header, Authorization, X-Requested-With',
    credentials: true,
    optionsSuccessStatus: 204,
    preflightContinue: true,
    maxAge: 3600, // Add max age to cache preflight requests
  }

  //app.enableCors(corsOptions)
  app.useWebSocketAdapter(new IoAdapter(app))
  await app.listen(PORT)
}

bootstrap()
