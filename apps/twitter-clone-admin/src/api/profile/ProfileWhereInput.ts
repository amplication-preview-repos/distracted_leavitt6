import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  bio?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  website?: StringNullableFilter;
};
