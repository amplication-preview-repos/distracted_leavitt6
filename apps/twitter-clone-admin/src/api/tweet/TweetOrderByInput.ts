import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  retweets?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
