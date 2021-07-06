import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { userSwaggerSettings } from './user.swagger'

@Entity()
export class User {
  @ApiProperty(userSwaggerSettings.id)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiProperty({})
  @Column('varchar', { length: 15, unique: true, nullable: false })
  login: string

  @Column('varchar', { length: 40, nullable: false })
  password: string

  @Column('varchar', { length: 30, unique: true, nullable: false })
  emailAdress: string

  @Column('text', { array: true, default: [] })
  role: string[]

  @Column('bool', { default: false, nullable: false })
  isBanned: boolean

  @Column('varchar', { nullable: false, default: 0 })
  profileId: string
}
