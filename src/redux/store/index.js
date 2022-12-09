import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import localStorage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "../reducers/userReducer";
import artistReducer from "../reducers/artistReducer";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const mainReducer = combineReducers({
  music: artistReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
