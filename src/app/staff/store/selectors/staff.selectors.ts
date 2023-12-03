import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getStaff, IStaffState } from '../reducer/staff.reducer';

export const selectStaffState = createFeatureSelector<IStaffState>('staff');

export const selectStaff = createSelector(selectStaffState, getStaff);
