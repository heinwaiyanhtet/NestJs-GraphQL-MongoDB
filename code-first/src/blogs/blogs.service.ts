import { Injectable } from '@nestjs/common';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogsService {

  constructor(private readonly prisma: PrismaService) {}
  
  async create(createBlogInput: CreateBlogInput) {
    return await this.prisma.blog.create({
      data: {
        title: createBlogInput.title,
        content: createBlogInput.content,
        user_id: createBlogInput.user_id,
        created_at: new Date(),
        updated_at: new Date(),
      }
    })
  }

  async findAll() {
    return await this.prisma.blog.findMany().then(blogs => {
      console.log(blogs);
      return blogs;
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  update(id: string, updateBlogInput: UpdateBlogInput) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
