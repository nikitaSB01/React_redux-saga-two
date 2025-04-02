import { ofType } from "redux-observable";
import { catchError, map, mergeMap, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  fetchServices,
  fetchServicesSuccess,
  fetchServicesFailure,
} from "./servicesSlice";

const API_URL = "https://httpserver-1-74d4.onrender.com/api/services"; // <-- твой URL

export const servicesEpic = (action$: any) =>
  action$.pipe(
    ofType(fetchServices.type),
    mergeMap(() =>
      ajax.getJSON(API_URL).pipe(
        map((response) => fetchServicesSuccess(response as any)),
        catchError((error) =>
          of(fetchServicesFailure(error.message || "Ошибка запроса"))
        )
      )
    )
  );
