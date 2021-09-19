import { IResponse } from '../payloads';

export class ResponseError implements IResponse {
  constructor(infoMessage: string, error?: any, statusCode?: number) {
    this.statusCode = statusCode;
    this.success = false;
    this.message = infoMessage;
    this.error = error;
    this.data = null;
    console.warn(
      new Date().toString() +
        ' - [Response]: ' +
        infoMessage +
        (error ? ' - ' + JSON.stringify(error) : ''),
    );
  }
  statusCode: number;
  message: string;
  data: null;
  errorMessage: any;
  error: any;
  success: boolean;
}

export class ResponseSuccess implements IResponse {
  constructor(infoMessage: string, data?: any, notLog?: boolean) {
    this.statusCode = 200;
    this.success = true;
    this.message = infoMessage;
    this.data = data;
    if (!notLog) {
      try {
        var offuscateRequest = JSON.parse(JSON.stringify(data));
        if (offuscateRequest && offuscateRequest.token)
          offuscateRequest.token = '*******';
        console.log(
          new Date().toString() +
            ' - [Response]: ' +
            JSON.stringify(offuscateRequest),
        );
      } catch (error) {}
    }
  }
  statusCode: number;
  message: string;
  data: any;
  errorMessage: any;
  error: any;
  success: boolean;
}
