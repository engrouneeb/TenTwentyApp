import {
  applyMiddleware,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import createSensitiveStorage from "redux-persist-sensitive-storage";
import thunk from "redux-thunk";
import { RootReducers } from "../reducers/reducer";
const LOGGER = createLogger();

const sensitiveStorage = createSensitiveStorage({
  keychainService: "DynamicApp_Task",
  sharedPreferencesName: "DynamicApp_Task",
});

const persistConfig = {
  key: "Root",
  storage: sensitiveStorage,
  timeout: 0,
  whitelist: [],
  blacklist: ["appSlice"],
};

const store = createStore(
  persistReducer(persistConfig, RootReducers),
  applyMiddleware(thunk, LOGGER),
);

const persistor = persistStore(store);
export { store, persistor };
