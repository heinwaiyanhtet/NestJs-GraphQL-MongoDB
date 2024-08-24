import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Blog {

  @Field(() => String)
  id: String;

  @Field(() => String)
  user_id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => String)
  created_at: Date;

  @Field(() => String)
  updated_at: Date;
}
