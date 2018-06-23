import { EntityState, createEntityAdapter } from '@ngrx/entity';

import * as fromActions from '../actions';

export interface User {
  id: string;
  avatar_url: string;
  type: string;
  login: string;
}

export const doctorsAdapter = createEntityAdapter<User>();
export interface IUsersState extends EntityState<User> {}

export const initialState: IUsersState = doctorsAdapter.getInitialState({});

export function reducer(
  state: IUsersState = initialState,
  action: fromActions.UsersActions
): IUsersState {
  switch (action.type) {
    case fromActions.LOAD_USERS_SUCCESS:
      const users = action.payload;
      return doctorsAdapter.addAll(users, state);
  }

  return state;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = doctorsAdapter.getSelectors();
