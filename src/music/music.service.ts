import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Music } from './entities/music.entity';
import { MusicFile } from './entities/musicfile.entity';

@Injectable()
export class MusicService {
  constructor(
    @InjectRepository(Music)
    private musicsRepository: Repository<Music>,

    @InjectRepository(MusicFile)
    private musicFilesRepository: Repository<Music>,
  ) {}

  async create(createMusicDto) {
    const musicFile = new MusicFile();
    musicFile.url = createMusicDto.musicFile.url;
    musicFile.type = createMusicDto.musicFile.type;
    musicFile.duration = createMusicDto.musicFile.duration;
    await this.musicFilesRepository.save(musicFile);

    const music = new Music();
    music.title = createMusicDto.title;
    music.artists = createMusicDto.artists;
    music.thumbnail = createMusicDto.thumbnail;
    music.file = musicFile;
    await this.musicsRepository.save(music);

    return music;
  }

  findAll() : Promise<Music[]> {
    return this.musicsRepository.find();
  }

  async findAllSearchPaginated(params) {
    const take = params.take || 10;
    const skip = params.skip || 0;
    const searchTerm = (params.keyword || '');

    const [result, total] = await this.musicsRepository.findAndCount(
      {
        where: {title: Like('%' + searchTerm + '%')},
        take: take,
        skip: skip,
      }
    );

    return {
      results : result,
      totalCount: total,
    };
  }

  findOne(id: number) {
    return this.musicsRepository.findOne(id);
  }

  async update(id: number, updateMusicDto) {
    const musicFile = new MusicFile();
    musicFile.id = updateMusicDto.musicFile.id;
    musicFile.url = updateMusicDto.musicFile.url;
    musicFile.type = updateMusicDto.musicFile.type;
    musicFile.duration = updateMusicDto.musicFile.duration;
    await this.musicFilesRepository.save(musicFile);

    const music = new Music();
    music.id = id;
    music.title = updateMusicDto.title;
    music.artists = updateMusicDto.artists;
    music.thumbnail = updateMusicDto.thumbnail;
    music.file = musicFile;
    await this.musicsRepository.save(music);

    return music;
  }

  remove(id: number) {
    return this.musicsRepository.delete(id);
  }
}
