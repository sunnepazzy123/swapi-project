import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filmReducer from "./reducers/film";

const rootReducer = combineReducers({
  filmReducer: filmReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
