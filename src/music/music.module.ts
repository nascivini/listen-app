import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicFile } from './entities/musicfile.entity';
import { Music } from './entities/music.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Music, MusicFile])],
  controllers: [MusicController],
  providers: [MusicService]
})
export class MusicModule {}
