import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 15 })
  login: string

  @Column({ length: 40 })
  password: string

  @Column({ length: 30 })
  email: string

  @Column({ length: 10, nullable: true })
  role: string
}
