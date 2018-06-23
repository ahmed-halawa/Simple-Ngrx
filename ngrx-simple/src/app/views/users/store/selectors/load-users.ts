import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromLoadUsers from '../reducers/load-users';

export const getLoadUsersState = createSelector(
  fromFeature.getIFeatureState,
  (state: fromFeature.IFeatureState) => state.load_users
);

export const getUsersLoading = createSelector(
  getLoadUsersState,
  fromLoadUsers.getUserLoading
);

export const getUsersLoaded = createSelector(
  getLoadUsersState,
  fromLoadUsers.getUserLoaded
);

export const getUsersErr = createSelector(
  getLoadUsersState,
  fromLoadUsers.getUserErr
);
