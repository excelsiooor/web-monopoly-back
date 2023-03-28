/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Post, Headers } from '@nestjs/common'
import { Request } from 'express'
import { TokenService } from './services/jwt.service'
import { AuthService } from './services/auth.service'
import { UserDTO } from './dto/user.dto'
import { UserService } from './services/user.service'
import { AuthorizationHeadersDTO } from 'src/libs/dto'

@Controller('user')
export class UserController {
  constructor(
    private readonly tokenService: TokenService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('auth/login')
  async googleLogin(@Body() body: UserDTO) {
    const res = await this.authService.validateUser(body)

    const tokens = this.tokenService.generateTokens(res.email)

    return { ...tokens }
  }

  @Get('rooms/create')
  async createRoom(@Headers() headers: AuthorizationHeadersDTO) {
    const { authorization } = headers
    const accessToken = authorization.split(' ') ? authorization.split(' ')[1] : ''

    const { email } = this.tokenService.verifyToken(accessToken)

    const res = await this.userService.createRoom(email)

    return res
  }

  @Get('rooms/get')
  async getRoomById() {}
}
