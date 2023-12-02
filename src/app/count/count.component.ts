import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CountService } from '../services/count.service';
import { IAppState } from '../store/reducers/counter.reducer';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/actions/counter.actions';
import { selectCount } from '../store/selectors/count.selectors';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent {
  count = 0;

  private _countSubject = new BehaviorSubject(0);
  countSubject$ = this._countSubject.asObservable();

  countByService$ = this.countService.count$;
  count$ = this.store.select(selectCount);

  constructor(
    private countService: CountService,
    private store: Store<IAppState>
  ) {}

  addProperty(val: number) {
    this.count += val;
  }

  changeCount(val: number) {
    this._countSubject.next(this._countSubject.value + val);
  }

  changeCountByService(val: number) {
    this.countService.changeCount(val);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
