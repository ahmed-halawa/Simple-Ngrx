import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromUsers from './users';
import * as fromLoadUsers from './load-users';

export interface IFeatureState {
  users: fromUsers.IUsersState;
  load_users: fromLoadUsers.ILoadUsersState;
}

export const reducers: ActionReducerMap<IFeatureState> = {
  users: fromUsers.reducer,
  load_users: fromLoadUsers.reducer
};

export const getIFeatureState = createFeatureSelector<IFeatureState>(
  'users_feature'
);
