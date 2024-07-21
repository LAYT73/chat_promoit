import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findByEmailProfile(email: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: { email },
      select: ['email', 'role', 'created_at', 'updated_at', 'id'],
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async addUser(email: string, password: string): Promise<User> {
    const hash = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({
      email: email,
      password: hash,
      role: 'user',
    });
    return this.userRepository.save(user);
  }

  async updateUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
