import { UserInfo } from "./reducer";
export const LogInAction = (user: UserInfo) => ({
  type: "LOG_IN",
  payload: user,
});

export const LogOutAction = () => ({
  type: "LOG_OUT",
});
