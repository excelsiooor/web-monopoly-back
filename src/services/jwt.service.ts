import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateTokens({ email, id }: { email: string; id: number }) {
    const accessToken = this.jwtService.sign({ data: { email, id } }, { expiresIn: '12h' })
    const refreshToken = this.jwtService.sign({ data: { email, id } }, { expiresIn: '7d' })
    return { accessToken, refreshToken }
  }

  verifyToken(token: string) {
    const verifyedToken = this.jwtService.verify(token)
    console.log({ verifyedToken })

    return { email: verifyedToken.data.email, id: verifyedToken.data.id }
  }
}
