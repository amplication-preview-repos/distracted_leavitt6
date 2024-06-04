import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetUpdateManyWithoutUsersInput } from "./TweetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  tweets?: TweetUpdateManyWithoutUsersInput;
  username?: string;
};
