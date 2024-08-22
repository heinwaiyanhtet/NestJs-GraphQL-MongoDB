// src/users/entities/user.entity.ts

import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Blog } from '../../blogs/entities/blog.entity';
import { Comment } from '../../comments/entities/comment.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  created_at: Date;

  @Field(() => [Blog], { nullable: 'items' })
  blogs?: Blog[];

  @Field(() => [Comment], { nullable: 'items' })
  comments?: Comment[];
}
