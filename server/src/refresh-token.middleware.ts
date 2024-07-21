import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RefreshTokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const refreshToken = req.cookies['refresh_token'];
    if (refreshToken) {
      req['refreshToken'] = refreshToken;
    }
    next();
  }
}
