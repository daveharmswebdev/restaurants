import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../reducers/counter.reducer';

export const selectAppState = createFeatureSelector<IAppState>('app');

export const selectCount = createSelector(selectAppState, state => state.count);
