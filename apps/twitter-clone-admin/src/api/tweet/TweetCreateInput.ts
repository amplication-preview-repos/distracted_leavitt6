import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetCreateInput = {
  likes?: number | null;
  retweets?: number | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
