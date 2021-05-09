import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { Music } from './music/entities/music.entity';
import { MusicFile } from './music/entities/musicfile.entity';
import { MusicModule } from './music/music.module';


@Module({
  imports: [
    MusicModule,
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'postgresql-listen-app',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'listen_app',
        entities: [Music, MusicFile, Category],
        synchronize: true,
        autoLoadEntities: true,
      }
    ),
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
