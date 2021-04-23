// import { createSelector } from 'reselect';
const InitialStore = {
  loggedIn: false,
  modules: [],
  error: {
    code: '',
    message: '',
  },
  table: [],
};

export const rootReducer = (store = InitialStore, action) => {
  switch (action.type) {
    case 'LOG_IN': {
      return { ...store, loggedIn: true, modules: action.payload };
    }
    case 'LOG_OUT': {
      return InitialStore;
    }
    case 'SET_ERROR': {
      return { ...store, error: action.payload };
    }
    case 'LOAD_TABLE': {
      return { ...store, table: action.payload };
    }
    default:
      return store;
  }
};
