import { Injectable } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(email: string) {
    const accessToken = this.jwtService.sign({ data: { email } }, { expiresIn: '12h' })
    const refreshToken = this.jwtService.sign({ data: { email } }, { expiresIn: '1d' })
    return { accessToken, refreshToken }
  }

  verifyToken(token: string) {
    try {
      const verifyedToken = this.jwtService.verify(token)

      if (!verifyedToken) {
        return { message: 'Invalid Token' }
      }

      return token
    } catch (error) {
      return { error }
    }
  }

  refreshToken(refreshToken: string) {
    try {
      const verifyedToken = this.jwtService.verify(refreshToken)

      return { email: verifyedToken.data.email }
    } catch (error) {
      return { error }
    }
  }
}
