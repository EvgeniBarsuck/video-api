import { Connection, Repository } from 'typeorm'
import { Video } from '../../common/entities/video.entity'

export const videoProviders = [
  {
    provide: 'VIDEO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Video),
    inject: ['DATABASE_CONNECTION'],
  },
]
