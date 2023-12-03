import { IStaff } from '../../models/IStaff';
import { Action, createReducer, on } from '@ngrx/store';
import {
  fetchStaff,
  fetchStaffError,
  fetchStaffSuccess,
} from '../actions/staff.actions';

export interface IStaffState {
  loading: boolean;
  staff: IStaff[];
  error: any;
}

export const initialStaffState: IStaffState = {
  loading: false,
  staff: [],
  error: null,
};

export const reducer = createReducer(
  initialStaffState,
  on(fetchStaff, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(fetchStaffSuccess, (state, { staff }) => ({
    ...state,
    loading: false,
    staff,
    error: null,
  })),
  on(fetchStaffError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function staffReducer(state: IStaffState | undefined, action: Action) {
  return reducer(state, action);
}

export const getLoading = (state: IStaffState) => state.loading;
export const getStaff = (state: IStaffState) => state.staff;
export const getError = (state: IStaffState) => state.error;
