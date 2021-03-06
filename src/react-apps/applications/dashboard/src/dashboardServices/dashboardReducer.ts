import update from 'immutability-helper';
import { Action, Reducer } from 'redux';
import * as FetchDashboardActions from './fetchDashboardActions';
import * as FetchDashboardActionTypes from './fetchDashboardActionTypes';

export interface IDashboardState {
  services: any;
  user: any;
  organizations: any;
}

const initialState: IDashboardState = {
  services: [],
  user: {},
  organizations: [],
};

const dashboardReducer: Reducer<IDashboardState> = (
  state: IDashboardState = initialState,
  action?: Action,
): IDashboardState => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case FetchDashboardActionTypes.FETCH_SERVICES_FULFILLED: {
      const { services } = action as FetchDashboardActions.IFetchServicesFulfilled;
      return update<IDashboardState>(state, {
        $apply: () => ({
          ...state,
          services,
        }),
      });
    }
    case FetchDashboardActionTypes.FETCH_CURRENT_USER_FULFILLED: {
      const { user } = action as FetchDashboardActions.IFetchCurrentUserFulfilled;
      return update<IDashboardState>(state, {
        $apply: () => ({
          ...state,
          user,
        }),
      });
    }
    case FetchDashboardActionTypes.FETCH_ORGANIZATIONS_FULFILLED: {
      const { organizations } = action as FetchDashboardActions.IFetchOrganizationsFulfilled;
      return update<IDashboardState>(state, {
        $apply: () => ({
          ...state,
          organizations,
        }),
      });
    }
    default: { return state; }
  }
};

export default dashboardReducer;
