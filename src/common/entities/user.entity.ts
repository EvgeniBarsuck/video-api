import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { userSwaggerSettings } from '../swagger/user.swagger'

@Entity()
export class User {
  @ApiProperty(userSwaggerSettings.id)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiProperty({
    name: 'User login',
    type: 'string',
    maxLength: 15,
    required: true,
    title: 'User login',
    description: 'User login for authorization',
    example: 'userLogin',
    uniqueItems: true,
    nullable: false,
  })
  @Column({ type: 'varchar', length: 15, unique: true, nullable: false })
  login: string

  @Column({ type: 'varchar', length: 40, nullable: false })
  password: string

  @Column({ type: 'varchar', length: 30, unique: true, nullable: false })
  emailAdress: string

  @Column({ type: 'text', array: true, default: [] })
  role: string[]

  @Column({ type: 'bool', default: false, nullable: false })
  isBanned: boolean

  @Column({ type: 'varchar', nullable: false, default: 0 })
  profileId: string
}
