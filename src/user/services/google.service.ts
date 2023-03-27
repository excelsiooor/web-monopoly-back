import { Inject, Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, Profile } from 'passport-google-oauth20'
import { AuthService } from './auth.service'

@Injectable()
export class GoogleService extends PassportStrategy(Strategy, 'google') {
  constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/api/auth/google/redirect',
      scope: ['email', 'profile'],
    })
  }

  async validate(_: string, __: string, profile: Profile) {
    const user = await this.authService.validateUser({
      displayName: profile.displayName,
      email: profile.emails[0].value,
      photo: profile.photos[0].value,
    })

    return user || null
  }
}
