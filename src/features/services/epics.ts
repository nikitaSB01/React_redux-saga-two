import { ofType } from "redux-observable";
import { catchError, map, mergeMap, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { Observable } from "rxjs";
import { AnyAction } from "redux";

import {
  fetchServices,
  fetchServicesSuccess,
  fetchServicesFailure,
} from "./servicesSlice";
import { Service } from "./types";

const API_URL = "https://react-redux-saga-two-bac.onrender.com/api/services";

export const servicesEpic = (
  action$: Observable<AnyAction>
): Observable<AnyAction> =>
  action$.pipe(
    ofType(fetchServices.type),
    mergeMap(() =>
      ajax.getJSON<Service[]>(API_URL).pipe(
        map((response) => fetchServicesSuccess(response)),
        catchError((error) =>
          of(fetchServicesFailure(error.message || "Ошибка запроса"))
        )
      )
    )
  );
