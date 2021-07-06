import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { videoSwaggerSettings } from '../swagger/video.swagger'

@Entity()
export class Video {
  @ApiProperty(videoSwaggerSettings.id)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiProperty(videoSwaggerSettings.name)
  @Column({ length: 15 })
  name: string
}
