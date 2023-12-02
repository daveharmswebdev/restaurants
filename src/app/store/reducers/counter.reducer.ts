import { Action, createReducer, on } from '@ngrx/store';
import * as countActions from '../actions/counter.actions';

export interface IAppState {
  count: number;
}

export const initialAppState: IAppState = {
  count: 0,
};

export const reducer = createReducer(
  initialAppState,
  on(countActions.increment, state => ({
    ...state,
    count: state.count + 1,
  })),
  on(countActions.decrement, state => ({
    ...state,
    count: state.count - 1,
  })),
  on(countActions.reset, state => ({
    ...state,
    count: 0,
  }))
);

export function appReducer(state: IAppState | undefined, action: Action) {
  return reducer(state, action);
}
