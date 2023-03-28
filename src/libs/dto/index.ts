import { IsString } from 'class-validator'

export class AuthorizationHeadersDTO {
  @IsString()
  authorization: string
}
