import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProdService } from './prod.service';
import { SubmitReview, videoFilter } from 'src/common/interface';
import { GetVideoPayload, submitReviewPayload } from 'src/common/payloads';
import { ResponseError, ResponseSuccess } from 'src/common/dto/response.dto';

@Controller('prod')
export class ProdController {
  constructor(private readonly prodService: ProdService) {}

  @Get('/get-video')
  async getVideo(@Query() filter: videoFilter) {
    try {
      return new ResponseSuccess(
        'Success',
        GetVideoPayload(await this.prodService.getVideo(filter)),
      );
    } catch (error) {
      return new ResponseError('Failed fetching ad', error.message, 500);
    }
  }

  @Post('submit-review')
  async submitReview(@Body() review: SubmitReview) {
    try {
      let result = await this.prodService.submitReview(review);
      return new ResponseSuccess('Success', submitReviewPayload(result));
    } catch (error) {
      return new ResponseError('Failed submitting review', error.message, 500);
    }
  }
}
