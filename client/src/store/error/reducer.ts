export interface ErrorInterface {
  code: string;
  message: string;
}
export interface ErrorStateInterface {
  error: ErrorInterface | undefined;
}

const InitialState = {
  error: undefined,
};
interface ErrorAction {
  type: string;
  payload?: ErrorInterface;
}
export const ErrorReducer = (state = InitialState, action: ErrorAction) => {
  switch (action.type) {
    case "SET_ERROR": {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
