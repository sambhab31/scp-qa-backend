import { videoInformation } from './interface';

export function GetVideoPayload(data: videoInformation[]) {
  return data.map((d) => {
    return {
      video_hash: d.video_hash,
      video_url: d.cdn_url,
      ads: d.output_json_mobile_sdk.ad_list,
    };
  });
}

export function submitReviewPayload(data) {
  return data.id ? { success: true } : { success: false };
}

export interface IResponse {
  statusCode: number;
  success: boolean;
  message: string;
  errorMessage: string;
  data: any[];
  error: any;
}
