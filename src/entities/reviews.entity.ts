import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

interface VideoReview {
  category: string;
  gender: string;
  color: string;
  comments: string;
  overall: string;
}

@Entity('reviews')
export class Review extends BaseEntity {
  @Column()
  video_hash: string;

  @Column({ type: 'jsonb' })
  review: VideoReview;
}
