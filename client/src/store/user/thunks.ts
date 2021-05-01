import { UserInfo } from "./reducer";
import { LogInAction } from "./actions";
import { Dispatch } from "redux";
import { SetError, ERR } from "../error";
import axios from "axios";
interface LoginData {
  username: string;
  password: string;
}

interface SuccessfulLogin {
  success: true;
  payload: UserInfo;
}
interface ResponseBody {
  data: SuccessfulLogin;
}
export const LogIn = (loginData: LoginData) => {
  return async (dispatch: Dispatch) => {
    try {
      if (loginData) {
        const { data }: ResponseBody = await axios.post(
          `${process.env.REACT_APP_URI}/auth/login`,
          loginData
        );
        if (data.payload) {
          dispatch(LogInAction(data.payload));
        } else {
          dispatch(SetError(ERR.AUTH_1("Invalid response body")));
        }
      }
    } catch (e: any) {
      if (e.response) {
        if (e.response.status === 403) {
          dispatch(SetError(ERR.AUTH_0("Wrong email/password")));
        } else {
          console.error(e);
        }
      } else {
        console.error(e);
      }
    }
  };
};
