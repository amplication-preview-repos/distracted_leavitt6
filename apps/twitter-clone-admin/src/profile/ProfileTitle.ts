import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "location";

export const ProfileTitle = (record: TProfile): string => {
  return record.location?.toString() || String(record.id);
};
