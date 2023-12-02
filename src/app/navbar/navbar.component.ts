import { Component } from '@angular/core';
import { IAppState } from '../store/reducers/counter.reducer';
import { Store } from '@ngrx/store';
import { selectCount } from '../store/selectors/count.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  count$ = this.store.select(selectCount);
  constructor(private store: Store<IAppState>) {}
}
