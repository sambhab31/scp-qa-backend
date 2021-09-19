import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubmitReview, videoFilter } from 'src/common/interface';
import { Review } from 'src/entities/reviews.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdService {
  constructor(@InjectRepository(Review) private reviews: Repository<Review>) {}

  async submitReview(review: SubmitReview) {
    try {
      // await this.reviews.manager.query(
      //   `update video_information set is_reviewd = true where video_hash = ${review.video_hash}`,
      // );
      return await this.reviews.save(review);
    } catch (error) {
      throw Error(error);
    }
  }

  async getVideo(filter: videoFilter) {
    try {
      filter.sortOrder = 'desc';
      let query = 'select * from video_information';
      query += ` where last_changed_date_time > '${filter.startDate}'::date`;
      query += ` and last_changed_date_time < '${filter.endDate}'::date`;
      query += ' and is_processed = true';
      query += ' order by last_changed_date_time';
      query += filter.sortOrder == 'desc' ? ' desc' : ' asc';
      query += ' limit 20';
      let ads = await this.reviews.manager.query(query);
      return ads;
    } catch (error) {
      throw Error(error);
    }
  }
}
