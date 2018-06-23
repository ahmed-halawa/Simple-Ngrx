import { Action } from '@ngrx/store';

export const LOAD_USERS = '[Users] load users';
export const LOAD_USERS_SUCCESS = '[Users] load users success';
export const LOAD_USERS_FAIL = '[Users] load users fail';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
  constructor() {}
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;
  constructor(public payload: any) {}
}

export type UsersActions = LoadUsers | LoadUsersSuccess | LoadUsersFail;
