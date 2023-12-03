import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StaffService } from '../../staff.service';
import {
  fetchStaff,
  fetchStaffError,
  fetchStaffSuccess,
} from '../actions/staff.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class StaffEffects {
  fetchStaff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchStaff),
      exhaustMap(() =>
        this.staffService.getStaff().pipe(
          map(staff => fetchStaffSuccess({ staff })),
          catchError(error => of(fetchStaffError({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private staffService: StaffService
  ) {}
}
