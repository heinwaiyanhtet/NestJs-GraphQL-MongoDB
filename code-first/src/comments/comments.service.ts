import { Injectable } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createCommentInput: CreateCommentInput) 
  {
    return await this.prisma.comment.create({ 
        data:{
            blog_id: createCommentInput.blog_id,
            comment: createCommentInput.comment,
            user_id:createCommentInput.user_id,
            created_at: new Date(),
        }
    });
  }

  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
