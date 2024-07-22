import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromCookie(req);
    if (!token) {
      throw new UnauthorizedException('No token found');
    }

    try {
      const decoded = jwt.verify(token, '7A125D673E2D5E29'); // TODO: Секретный ключ должен быть в конфигурации
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      req.user = decoded;
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  private extractTokenFromCookie(req: Request): string | null {
    return req.cookies['access_token'] || null;
  }
}
