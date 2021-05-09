import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MusicFile {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  url: string

  @Column({ nullable: false })
  type: string

  @Column({ nullable: false, type: 'time' })
  duration: string;
}