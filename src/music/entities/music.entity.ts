import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { MusicFile } from './musicfile.entity';

@Entity()
export class Music {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  artists: string;

  @Column({ default: true })
  thumbnail: string;

  @OneToOne(type => MusicFile, { eager: true })
  @JoinColumn({ name: "music_file_id" })
  file: MusicFile;
}
