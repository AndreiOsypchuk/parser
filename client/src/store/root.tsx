import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { UserReducer, UserStateInterface } from "./user/reducer";
import { DataReducer, DataStateInterface } from "./data/reducer";
import { ErrorReducer, ErrorStateInterface } from "./error/reducer";

import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["data", "error"],
};

export interface RootStoreInterface {
  user: UserStateInterface;
  data: DataStateInterface;
  error: ErrorStateInterface;
}

const rootReducer = combineReducers({
  user: UserReducer,
  data: DataReducer,
  error: ErrorReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
