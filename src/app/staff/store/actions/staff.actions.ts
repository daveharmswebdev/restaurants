import { createAction, props } from '@ngrx/store';
import { IStaff } from '../../models/IStaff';

export const fetchStaff = createAction('[staff component] fetch staff');
export const fetchStaffSuccess = createAction(
  '[staff component] fetch staff success',
  props<{ staff: IStaff[] }>()
);
export const fetchStaffError = createAction(
  '[staff component] fetch staff error',
  props<{ error: any }>()
);
