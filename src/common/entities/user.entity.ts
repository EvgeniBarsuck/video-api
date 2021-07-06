import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar', { length: 15, unique: true, nullable: false })
  name: string

  @Column('varchar', { length: 40, nullable: false })
  password: string

  @Column('varchar', { length: 30, unique: true, nullable: false })
  email: string

  @Column('text', { array: true, default: [] })
  role: string[]

  @Column('bool', { default: false, nullable: false})
  isBanned: boolean

  @Column('varchar', { nullable: false, default: 0 })
  profileId: string

}