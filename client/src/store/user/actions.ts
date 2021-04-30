import { UserInfo } from "./reducer";
export const LogIn = (user: UserInfo) => ({
  type: "LOG_IN",
  payload: user,
});

export const LogOut = () => ({
  type: "LOG_OUT",
});
