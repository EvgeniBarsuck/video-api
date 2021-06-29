import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'

export type User = any

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  async findOne(login): Promise<User | undefined> {
    return await this.userRepository
      .createQueryBuilder('user')
      .where('user.login=:login', { login })
      .getOne()
  }
}
