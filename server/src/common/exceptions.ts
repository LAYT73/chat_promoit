import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExistsException extends HttpException {
  constructor() {
    super('User with this email already exists', HttpStatus.BAD_REQUEST);
  }
}

export class UserNotFoundException extends HttpException {
  constructor() {
    super('User not found', HttpStatus.NOT_FOUND);
  }
}

export class InvalidPasswordException extends HttpException {
  constructor() {
    super('Invalid password', HttpStatus.UNAUTHORIZED);
  }
}

export class InvalidRefreshTokenException extends HttpException {
  constructor() {
    super('Invalid refresh token', HttpStatus.UNAUTHORIZED);
  }
}
