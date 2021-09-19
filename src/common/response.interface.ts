export interface IResponse {
  statusCode: number;
  success: boolean;
  message: string;
  errorMessage: string;
  data: any[];
  error: any;
}
