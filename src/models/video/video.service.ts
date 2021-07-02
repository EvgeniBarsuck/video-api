import { Inject, Injectable } from '@nestjs/common'
import { Video } from 'src/common/entities/video.entity'
import { Repository } from 'typeorm'

@Injectable()
export class VideoService {
  constructor(
    @Inject('VIDEO_REPOSITORY')
    private userRepository: Repository<Video>,
  ) {}

  async findAll(): Promise<Video[]> {
    return this.userRepository.find()
  }
}
