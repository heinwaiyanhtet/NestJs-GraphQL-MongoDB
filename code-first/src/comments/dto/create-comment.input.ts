import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {

  @Field()
  blog_id: string;

  @Field()
  comment : string;

  @Field()
  user_id : string;

}
