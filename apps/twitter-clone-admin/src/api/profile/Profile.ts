import { User } from "../user/User";

export type Profile = {
  bio: string | null;
  createdAt: Date;
  id: string;
  location: string | null;
  updatedAt: Date;
  user?: User | null;
  website: string | null;
};
