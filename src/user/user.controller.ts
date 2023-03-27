/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Post } from '@nestjs/common'
import { Request } from 'express'
import { TokenService } from './services/jwt.service'
import { AuthService } from './services/auth.service'
import { UserDTO } from './dto/user.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly tokenService: TokenService, private readonly authService: AuthService) {}

  @Post('google/login')
  async googleLogin(@Body() body: UserDTO) {
    const res = await this.authService.validateUser(body)

    const tokens = this.tokenService.generateToken(res.email)

    return { ...tokens }
  }

  // @Get('google/redirect')
  // @UseGuards(GoogleAuthGuard)
  // googleRedirect(@Req() req: Request) {
  //   return { res: req.user }
  // }
}
