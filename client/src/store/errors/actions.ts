import { ErrorInterface } from "./reducer";

export const ERR = {
  AUTH_0: { code: "AUTH_0", message: "Wrong username/password" },
  AUTH_1: { code: "AUTH_1", message: "Invalid response recieved" },
  AUTH_2: { code: "AUTH_2", message: "Invalid request body" },
  AUTH_3: { code: "AUTH_3", message: "Server problem" },
  DATA_0: { code: "DATA_0", message: "Invalid request body" },
  DATA_1: { code: "DATA_1", message: "Invalid response recieved" },
  DATA_2: { code: "DATA_2", message: "Server problem" },
};

export const SetError = (error: ErrorInterface) => ({
  type: "SET_ERROR",
  payload: error,
});
