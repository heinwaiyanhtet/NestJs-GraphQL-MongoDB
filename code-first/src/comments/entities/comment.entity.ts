import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(() => String, { description: 'Unique identifier for the comment' })
  id: string;  // Corresponds to the `id` field in Prisma

  @Field(() => String, { description: 'Identifier for the blog post this comment is associated with' })
  blog_id: string;  // Corresponds to the `blog_id` field in Prisma

  @Field(() => String, { description: 'The content of the comment' })
  comment: string;  // Corresponds to the `comment` field in Prisma

  @Field(() => Date, { description: 'Date and time when the comment was created' })
  created_at: Date;  // Corresponds to the `created_at` field in Prisma

  @Field(() => String, { description: 'Identifier for the user who created the comment' })
  user_id: string;  // Corresponds to the `user_id` field in Prisma
}
