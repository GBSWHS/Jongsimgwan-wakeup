import { Module } from '@nestjs/common'
import { MusicService } from './music.service'
import { MusicController } from './music.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MusicEntity } from './entities/music.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([MusicEntity])
  ],
  providers: [MusicService],
  controllers: [MusicController],
  exports: [MusicService]
})
export class MusicModule {}
