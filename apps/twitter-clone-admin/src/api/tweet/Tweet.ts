import { User } from "../user/User";

export type Tweet = {
  createdAt: Date;
  id: string;
  likes: number | null;
  retweets: number | null;
  text: string | null;
  updatedAt: Date;
  user?: User | null;
};
