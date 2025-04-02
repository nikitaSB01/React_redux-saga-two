import { combineEpics, Epic } from "redux-observable";
import { AnyAction } from "redux";
import type { RootState } from "./types";

import { servicesEpic } from "../features/services/epics"; // <--- ПРАВИЛЬНЫЙ путь
import { serviceDetailsEpic } from "../features/services/detailsEpic";

export const rootEpic: Epic<AnyAction, AnyAction, RootState> = combineEpics(
  servicesEpic,
  serviceDetailsEpic
);
