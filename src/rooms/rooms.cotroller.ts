/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Headers } from '@nestjs/common'
import { AuthorizationHeadersDTO } from 'src/libs/dto'
import { TokenService } from 'src/user/services/jwt.service'
import { RoomsService } from './services/rooms.service'

@Controller('rooms')
export class RoomsController {
  constructor(private readonly tokenService: TokenService, private readonly roomsService: RoomsService) {}

  @Get('create')
  async createRoom(@Headers() headers: AuthorizationHeadersDTO) {
    const { authorization } = headers
    const accessToken = authorization.split(' ') ? authorization.split(' ')[1] : ''

    const { email } = this.tokenService.verifyToken(accessToken)

    const res = await this.roomsService.createRoom(email)

    return res
  }

  @Get('get')
  async getRoomById() {}
}
