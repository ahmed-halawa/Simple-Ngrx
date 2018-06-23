import * as fromActions from '../actions';

export interface ILoadUsersState {
  loading: boolean;
  loaded: boolean;
  err: any;
}

export const initialState: ILoadUsersState = {
  loading: false,
  loaded: false,
  err: undefined
};

export function reducer(
  state: ILoadUsersState = initialState,
  action: fromActions.UsersActions
): ILoadUsersState {
  switch (action.type) {
    case fromActions.LOAD_USERS:
      return {
        ...state,
        loading: true
      };

    case fromActions.LOAD_USERS_SUCCESS:
      const { total, totalChecked } = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        err: undefined
      };

    case fromActions.LOAD_USERS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        err: action.payload
      };
  }

  return state;
}

export const getUserLoading = (state: ILoadUsersState) => state.loading;
export const getUserLoaded = (state: ILoadUsersState) => state.loaded;
export const getUserErr = (state: ILoadUsersState) => state.err;

