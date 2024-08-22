// src/comments/comment.model.ts

import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Blog } from 'src/blogs/models/blog.model';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class Comment {
  @Field(() => ID)
  id: string;

  @Field()
  blog_id: string;

  @Field()
  user_id: string;

  @Field()
  comment: string;

  @Field()
  created_at: Date;

  @Field(() => Blog)
  blog: Blog;

  @Field(() => User)
  author: User;
}
