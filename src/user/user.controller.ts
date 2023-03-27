/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { GoogleAuthGuard } from './guards/google-auth.guard'
import { TokenService } from './services/jwt.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly tokenService: TokenService) {}

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  googleLogin() {}

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleRedirect(@Req() req: Request) {
    return { res: req.user }
  }
}
