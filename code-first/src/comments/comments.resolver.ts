import { Resolver, Query, Mutation, Args, Int, Context, Subscription } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { PubSub } from 'graphql-subscriptions';


const pubSub = new PubSub();

@Resolver((of) => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}


  @Mutation(() => Comment)
  async createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
  ) {

      const pubSub = new PubSub();
      const newComment = await this.commentsService.create(createCommentInput);
      // console.log("Publishing comment:", newComment);
      // try {
        
      //     pubSub.publish('simpleTest', { simpleTest: "Hello World!" });


      // } catch (error) {
      //     console.log(error);
      // } 
      return newComment;

    }



  @Query(() => [Comment], { name: 'comments' })
  findAll() {
    return this.commentsService.findAll();
  }

  @Query(() => Comment, { name: 'comment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.commentsService.findOne(id);
  }

  @Mutation(() => Comment)
  updateComment(@Args('updateCommentInput') updateCommentInput: UpdateCommentInput) {
    return this.commentsService.update(updateCommentInput.id, updateCommentInput);
  }

  @Mutation(() => Comment)
  removeComment(@Args('id', { type: () => Int }) id: number) {
    return this.commentsService.remove(id);
  }

  // @Subscription(() => Comment, {
  //   filter: (payload, variables) =>
  //     payload.commentAdded.comment === variables.title,
  // })

  // @Subscription(() => String)
  // commentAdded() {
  //   return pubSub.asyncIterator('hello');
  // }





  @Subscription(() => String)
  simpleTest() {
    return pubSub.asyncIterator('simpleTest');
  }

  @Mutation(() => String)
  triggerTest() {
    pubSub.publish('simpleTest', { simpleTest: "Hello World!" });
    return "Triggered";
  }


}
