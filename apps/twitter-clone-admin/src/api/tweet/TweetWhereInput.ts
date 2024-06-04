import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetWhereInput = {
  id?: StringFilter;
  likes?: IntNullableFilter;
  retweets?: IntNullableFilter;
  text?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
