import {Injectable} from "@angular/core";
import {BehaviorSubject } from "rxjs";
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: "root"
})
export class CountService {
  private _count = new BehaviorSubject(0)
  count$ = this._count.asObservable().pipe(
    tap(val => console.log('this is from the service', val))
  );

  changeCount(val: number) {
    this._count.next(this._count.value + val)
  }
}
