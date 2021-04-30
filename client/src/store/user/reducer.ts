export interface UserInfo {
  username: string;
  _id: string;
  modules: string[];
}
export interface UserStateInterface {
  info: UserInfo | undefined;
  loggedIn: boolean;
}

const InitialState: UserStateInterface = {
  info: undefined,
  loggedIn: false,
};

interface UserAction {
  type: string;
  payload?: UserInfo;
}

export const UserReducer = (store = InitialState, action: UserAction) => {
  switch (action.type) {
    case "LOG_IN": {
      if (action.payload) {
        return { ...store, info: action.payload, loggedIn: true };
      }
      return store;
    }
    case "LOG_OUT": {
      return InitialState;
    }
    default:
      return store;
  }
};
