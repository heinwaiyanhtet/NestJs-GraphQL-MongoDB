import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBlogInput {


  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  user_id: string;


}
