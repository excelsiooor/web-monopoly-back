/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './providers/auth.service'
import { UserDTO } from './dto/user.dto'
import { UserService } from './providers/user.service'
import { AuthorizationHeadersDTO } from 'src/libs/dto'
import { TokenService } from 'src/services/jwt.service'

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

    const tokens = this.tokenService.generateTokens({ email: res.email, id: res.id })

    return { ...tokens, user: res }
  }
}
