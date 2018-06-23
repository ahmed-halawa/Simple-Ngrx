import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { concatMap, map, catchError, switchMap } from 'rxjs/operators';
import { Effect, Actions } from '@ngrx/effects';

import * as fromActions from '../actions';
import * as fromServices from '../../services';

@Injectable()
export class UsersEffect {
  constructor(
    private actions$: Actions,
    private usersService: fromServices.UsersService
  ) {}

  @Effect()
  loadUsers$ = this.actions$.ofType(fromActions.LOAD_USERS).pipe(
    switchMap(() => {
      return this.usersService.loadDoctors().pipe(
        map((data: any) => new fromActions.LoadUsersSuccess(data)),
        catchError(error => of(new fromActions.LoadUsersFail(error)))
      );
    })
  );
}
