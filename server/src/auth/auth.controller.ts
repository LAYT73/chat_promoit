import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { User } from '../user/entities/user.entity';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req): Promise<User> {
    const email = req.user.email;
    const user = await this.userService.findByEmailProfile(email);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  @Post('refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies['refresh_token'];

    if (!refreshToken) {
      return res.status(400).json({ message: 'Refresh token is required' });
    }

    try {
      const newAccessToken = await this.authService.refreshAccessToken(
        refreshToken,
      );
      res.cookie('access_token', newAccessToken.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Используйте secure: true только в production
        maxAge: 15 * 60 * 1000, // 15 минут
      });
      return res.status(200).json({ message: 'Access token has been updated' });
    } catch (error) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }
  }

  @Post('signup')
  async signUp(@Body() body, @Res() res): Promise<void> {
    await this.authService.signUp(
      body.email,
      body.password,
      body.username,
      res,
    );
  }

  @Post('login')
  async login(@Body() body, @Res() res): Promise<void> {
    return this.authService.login(body.email, body.password, res);
  }

  @Post('logout')
  async logout(@Req() req, @Res() res): Promise<void> {
    return this.authService.logout(req, res);
  }
}
