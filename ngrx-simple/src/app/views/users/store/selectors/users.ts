import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUsers from '../reducers/users';

export const getUsersState = createSelector(
  fromFeature.getIFeatureState,
  (state: fromFeature.IFeatureState) => state.users
);

export const getUsersEntitySelectAll = createSelector(
  getUsersState,
  fromUsers.selectAll
);

export const getUsersEntitySelectEntities = createSelector(
  getUsersState,
  fromUsers.selectEntities
);

export const getUsersEntitySelectIds = createSelector(
  getUsersState,
  fromUsers.selectIds
);

