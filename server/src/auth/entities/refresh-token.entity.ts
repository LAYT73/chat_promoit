import { sign } from 'jsonwebtoken';

class RefreshToken {
  constructor(init?: Partial<RefreshToken>) {
    Object.assign(this, init);
  }

  email: string;
  role: string;

  sign(): string {
    return sign({ ...this }, '7A125D673E2D5E29');
  }
}

export default RefreshToken;
