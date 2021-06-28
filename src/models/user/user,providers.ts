import { Connection, Repository } from 'typeorm'
import { User } from '../../common/entity/user.entity'

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
]
