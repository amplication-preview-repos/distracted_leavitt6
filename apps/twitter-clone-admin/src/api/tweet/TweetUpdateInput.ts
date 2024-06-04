import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  likes?: number | null;
  retweets?: number | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
