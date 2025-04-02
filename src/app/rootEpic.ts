import { combineEpics, Epic } from "redux-observable";
import { AnyAction } from "redux";
import { servicesEpic } from "../features/services/epics";
import { serviceDetailsEpic } from "../features/services/detailsEpic";
import type { RootState } from "./types";

export const rootEpic: Epic<AnyAction, AnyAction, RootState> = combineEpics(
  servicesEpic,
  serviceDetailsEpic
);
