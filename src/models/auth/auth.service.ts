import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private readonly jwtService: JwtService) {}
  async validateUser(login: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(login)
    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    }
    return null
  }
  async login(user: any) {
    const payload = { login: user.login, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
