// src/blogs/blog.model.ts

import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/users/models/user.model';
import { Comment } from 'src/comments/models/comment.model';

@ObjectType()
export class Blog {
  @Field(() => ID)
  id: string;

  @Field()
  user_id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => User)
  author: User;

  @Field(() => [Comment])
  comments: Comment[];
}
