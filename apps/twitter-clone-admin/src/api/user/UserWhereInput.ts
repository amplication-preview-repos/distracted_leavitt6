import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profiles?: ProfileListRelationFilter;
  tweets?: TweetListRelationFilter;
  username?: StringFilter;
};
