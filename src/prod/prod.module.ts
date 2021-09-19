import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdController } from './prod.controller';
import { configService } from 'src/config/ormconfig';
import { ProdService } from './prod.service';
import { Review } from 'src/entities/reviews.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([Review]),
  ],
  controllers: [ProdController],
  providers: [ProdService],
})
export class ProdModule {}
