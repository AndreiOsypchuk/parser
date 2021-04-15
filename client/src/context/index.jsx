import React from 'react';

const defaultState = {
  loggedIn: false,
  sites: [],
  table: [],
};
export const RootContext = React.createContext();

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOG_IN': {
      return { ...state, loggedIn: true };
    }
    case 'LOG_OUT': {
      return defaultState;
    }
    case 'LOAD_URLS': {
      return { ...state, sites: action.payload };
    }
    case 'LOAD_TABLE': {
      return { ...state, table: action.payload };
    }
    default:
      return state;
  }
};

const RootProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, defaultState, () => {
    return JSON.parse(localStorage.getItem('state')) || defaultState;
  });
  React.useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);
  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};
export default RootProvider;
