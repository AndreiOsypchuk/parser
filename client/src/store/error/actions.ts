import { ErrorInterface } from "./reducer";

export const ERR = {
  AUTH_0: (message: string) => ({ code: "AUTH_0", message }),
  AUTH_1: (message: string) => ({ code: "AUTH_1", message }),
  DATA_0: (message: string) => ({ code: "DATA_0", message }),
};

export const SetError = (error: ErrorInterface) => ({
  type: "SET_ERROR",
  payload: error,
});
