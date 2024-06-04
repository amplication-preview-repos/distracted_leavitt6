/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Tweet } from "./Tweet";
import { TweetCountArgs } from "./TweetCountArgs";
import { TweetFindManyArgs } from "./TweetFindManyArgs";
import { TweetFindUniqueArgs } from "./TweetFindUniqueArgs";
import { CreateTweetArgs } from "./CreateTweetArgs";
import { UpdateTweetArgs } from "./UpdateTweetArgs";
import { DeleteTweetArgs } from "./DeleteTweetArgs";
import { User } from "../../user/base/User";
import { TweetService } from "../tweet.service";
@graphql.Resolver(() => Tweet)
export class TweetResolverBase {
  constructor(protected readonly service: TweetService) {}

  async _tweetsMeta(
    @graphql.Args() args: TweetCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Tweet])
  async tweets(@graphql.Args() args: TweetFindManyArgs): Promise<Tweet[]> {
    return this.service.tweets(args);
  }

  @graphql.Query(() => Tweet, { nullable: true })
  async tweet(
    @graphql.Args() args: TweetFindUniqueArgs
  ): Promise<Tweet | null> {
    const result = await this.service.tweet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Tweet)
  async createTweet(@graphql.Args() args: CreateTweetArgs): Promise<Tweet> {
    return await this.service.createTweet({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Tweet)
  async updateTweet(
    @graphql.Args() args: UpdateTweetArgs
  ): Promise<Tweet | null> {
    try {
      return await this.service.updateTweet({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tweet)
  async deleteTweet(
    @graphql.Args() args: DeleteTweetArgs
  ): Promise<Tweet | null> {
    try {
      return await this.service.deleteTweet(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Tweet): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
