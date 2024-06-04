import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  bio?: string | null;
  location?: string | null;
  user?: UserWhereUniqueInput | null;
  website?: string | null;
};
