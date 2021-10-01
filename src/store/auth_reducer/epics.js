import { LOGIN } from "../types";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import { setLoginResponse } from "../actions";

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap(
      (action) =>
        setLoginResponse({
          user: {
            email: "test@gmail.com",
            token: "test",
          },
        })
      //   ajax.getJSON(`/sc-edu-institutions/api/kindergartens`).pipe(
      //     map((response) => {
      //       return ;
      //     }),
      //     catchError((error) => ({
      //       type: "FETCH_SCHOOLS_DATA_REJECTED",
      //       error: error,
      //     }))
      //   )
    )
  );
