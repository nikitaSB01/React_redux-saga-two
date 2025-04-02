import { combineEpics } from "redux-observable";
import { servicesEpic } from "../features/services/epics";

export const rootEpic = combineEpics(servicesEpic);
