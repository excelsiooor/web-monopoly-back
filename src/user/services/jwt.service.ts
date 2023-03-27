import { Injectable } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken({ email }: { email: string }) {
    const accessToken = this.jwtService.sign({ data: { email } }, { expiresIn: '12h' })
    const refreshToken = this.jwtService.sign({ data: { email } }, { expiresIn: '1d' })
    return { accessToken, refreshToken }
  }

  verifyToken({ refreshToken }: { refreshToken: string }) {
    try {
      const verifyedToken = this.jwtService.verify(refreshToken)

      return { email: verifyedToken.data.email }
    } catch (error) {
      return { error }
    }
  }
}
