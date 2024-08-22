import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Blog } from "src/blogs/models/blog.model";
import { Comment } from "src/comments/models/comment.model";

@ObjectType()
export class User
{
    @Field(() => ID)
    id:string;

    @Field()
    username:string;

    @Field()
    email : string;

    @Field()
    password : string;

    @Field()
    created_at : Date;

    @Field(() => [Blog])
    blogs : Blog[];

    @Field(() => [Comment])
    comments: Comment[];
    
}