import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateTokens(email: string) {
    const accessToken = this.jwtService.sign({ data: { email } }, { expiresIn: '12h' })
    const refreshToken = this.jwtService.sign({ data: { email } }, { expiresIn: '7d' })
    return { accessToken, refreshToken }
  }

  verifyToken(token: string) {
    const verifyedToken = this.jwtService.verify(token)

    return { email: verifyedToken.data.email }
  }
}
