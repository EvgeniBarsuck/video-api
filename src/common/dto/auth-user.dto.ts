import { ApiProperty } from '@nestjs/swagger'
import { userSwaggerSettings } from '../swagger/user.swagger'

export class AuthUserDto {
  @ApiProperty(userSwaggerSettings.login)
  readonly login: string

  @ApiProperty(userSwaggerSettings.password)
  readonly password: string
}
