import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./rootEpic";
import servicesReducer from "../features/services/servicesSlice";
import detailsReducer from "../features/services/detailsSlice";
import { RootState } from "./types";
import type { AnyAction } from "redux";

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState>();

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    details: detailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
