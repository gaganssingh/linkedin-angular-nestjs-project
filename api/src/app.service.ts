import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { status: string; message: string } {
    return {
      status: 'Success',
      message: 'Hello from the server',
    };
  }
}
