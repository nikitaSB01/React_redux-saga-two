import { ofType } from "redux-observable";
import { catchError, map, mergeMap, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  fetchServiceDetails,
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
} from "./detailsSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { Observable } from "rxjs";
import { AnyAction } from "redux";
import { Service } from "./types";

const API_URL = "https://httpserver-1-74d4.onrender.com/api/services";

export const serviceDetailsEpic = (action$: Observable<AnyAction>) =>
  action$.pipe(
    ofType(fetchServiceDetails.type),
    mergeMap((action: PayloadAction<number>) =>
      ajax.getJSON<Service>(`${API_URL}/${action.payload}`).pipe(
        map((response) => fetchServiceDetailsSuccess(response)),
        catchError((error) =>
          of(fetchServiceDetailsFailure(error.message || "Ошибка загрузки"))
        )
      )
    )
  );
