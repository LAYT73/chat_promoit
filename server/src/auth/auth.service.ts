import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { sign, verify } from 'jsonwebtoken';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import {
  UserEmailAlreadyExistsException,
  UserUsernameAlreadyExistsException,
  UserNotFoundException,
  InvalidPasswordException,
  InvalidRefreshTokenException,
} from 'src/common/exceptions';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUp(
    email: string,
    password: string,
    username: string,
    res: Response,
  ): Promise<void> {
    let existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      throw new UserEmailAlreadyExistsException();
    }
    existingUser = await this.userService.findByUsername(username);
    if (existingUser) {
      throw new UserUsernameAlreadyExistsException();
    }
    const user = await this.userService.addUser(email, password, username);
    await this.setTokensInCookies(user, res);
  }

  async login(email: string, password: string, res: Response): Promise<void> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UserNotFoundException();
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new InvalidPasswordException();
    }

    await this.setTokensInCookies(user, res);
  }

  private async newRefreshAndAccessToken(
    user: User,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const refreshToken = sign(
      {
        email: user.email,
        role: user.role,
      },
      '7A125D673E2D5E29', // TODO: Секретный ключ должен быть в конфигурации
      {
        expiresIn: '7d', // Например, 7 дней
      },
    );

    // Обновляем пользователя с новым refresh токеном
    user.refresh_token = refreshToken;
    await this.userService.updateUser(user);

    const access_token = sign(
      {
        email: user.email,
        role: user.role,
      },
      '7A125D673E2D5E29', // TODO: Секретный ключ должен быть в конфигурации
      {
        expiresIn: '15m',
      },
    );

    return {
      refresh_token: refreshToken,
      access_token: access_token,
    };
  }

  async retrieveRefreshToken(refresh_token: string): Promise<User> {
    try {
      const decodedToken: any = verify(refresh_token, '7A125D673E2D5E29');

      const user = await this.userService.findByEmail(decodedToken.email);
      if (!user || user.refresh_token !== refresh_token) {
        throw new InvalidRefreshTokenException();
      }

      return user;
    } catch (error) {
      throw new InvalidRefreshTokenException();
    }
  }

  async refreshAccessToken(
    refresh_token: string,
  ): Promise<{ access_token: string }> {
    const user = await this.retrieveRefreshToken(refresh_token);
    const access_token = sign(
      {
        email: user.email,
        role: user.role,
      },
      '7A125D673E2D5E29', // TODO: Секретный ключ должен быть в конфигурации
      {
        expiresIn: '15m',
      },
    );

    return { access_token };
  }

  async logout(userId: number): Promise<void> {
    const user = await this.userService.findById(userId);
    if (user) {
      user.refresh_token = null;
      await this.userService.updateUser(user);
    }
  }

  private async setTokensInCookies(user: User, res: Response): Promise<void> {
    const { access_token, refresh_token } = await this.newRefreshAndAccessToken(
      user,
    );

    // Устанавливаем токены в куки
    res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Используйте secure: true только в production
      maxAge: 15 * 60 * 1000, // 15 минут
    });

    res.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Используйте secure: true только в production
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 дней
    });

    res.status(200).json({ message: 'Logged in successfully' });
  }
}
