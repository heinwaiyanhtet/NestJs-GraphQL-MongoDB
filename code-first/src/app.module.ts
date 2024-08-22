import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { BlogsModule } from './blogs/blogs.module';
import { CommentsModule } from './comments/comments.module';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    BlogsModule,
    CommentsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/public?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.2'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
