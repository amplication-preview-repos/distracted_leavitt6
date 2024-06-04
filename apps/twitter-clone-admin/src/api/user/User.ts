import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";
import { Tweet } from "../tweet/Tweet";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  profiles?: Array<Profile>;
  roles: JsonValue;
  tweets?: Array<Tweet>;
  updatedAt: Date;
  username: string;
};
