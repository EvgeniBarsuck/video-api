import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 15 })
  name: string

}
