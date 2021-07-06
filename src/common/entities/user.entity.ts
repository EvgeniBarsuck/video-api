import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { userSwaggerSettings } from '../swagger/user.swagger'

@Entity()
export class User {
  @ApiProperty(userSwaggerSettings.id)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiProperty(userSwaggerSettings.login)
  @Column({ type: 'varchar', length: 15, unique: true, nullable: false })
  login: string

  @ApiProperty(userSwaggerSettings.password)
  @Column({ type: 'varchar', length: 20, nullable: false })
  password: string

  @ApiProperty(userSwaggerSettings.email)
  @Column({ type: 'varchar', length: 30, unique: true, nullable: false })
  email: string

  @ApiProperty(userSwaggerSettings.role)
  @Column({ type: 'text', array: true, default: [] })
  role: string[]

  @ApiProperty(userSwaggerSettings.isBanned)
  @Column({ type: 'bool', default: false, nullable: false })
  isBanned: boolean

  @ApiProperty(userSwaggerSettings.profielId)
  @Column({ type: 'varchar', nullable: false })
  profileId: string
}
