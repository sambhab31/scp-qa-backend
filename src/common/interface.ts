export interface videoFilter {
  startDate: string;
  endDate: string;
  sortOrder: string;
  clientName: string;
}

export interface SubmitReview {
  video_hash: string;
  review: {
    gender: string;
    color: string;
    category: string;
    comments: string;
    overall: string;
    name: string;
  };
}
export interface videoInformation {
  video_hash: string;
  cdn_url: string;
  is_processed: boolean;
  output_json_mobile_sdk: { ad_list: AdsJson[] };
}

export interface AdsJson {
  display_category: string;
  ad_image_thumbnail: string;
  redirect_url: string;
  ad_title: string;
  ad_price: {};
  discount_percentage: string;
  availability: Boolean;
  target_url_business: string;
  rank: number;
}
