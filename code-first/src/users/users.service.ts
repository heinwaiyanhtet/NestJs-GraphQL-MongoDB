import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<User> {

    return this.prisma.user.create({
      data: {
        username: createUserInput.username,
        email: createUserInput.email,
        password: createUserInput.password,
        created_at: new Date(),
      },
    });
  }

  async findAll() : Promise<User[]> {
    return this.prisma.user.findMany().then(users => {
      console.log(users);  // Log the actual array of users
      return users;
    });
  }

  async findOne(id: string): Promise<User | null> {
    return this.prisma.users.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        username: updateUserInput.username,
        email: updateUserInput.email,
        password: updateUserInput.password,
      },
    });
  }

  async remove(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
  
}
