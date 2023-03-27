import { IsString } from 'class-validator'

export class UserDTO {
  @IsString()
  displayName: string

  @IsString()
  email: string

  @IsString()
  photo: string
}
