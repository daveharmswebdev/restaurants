import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CountService} from "../services/count.service";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent {
  count = 0;

  private _countSubject = new BehaviorSubject(0);
  countSubject$ = this._countSubject.asObservable();

  countByService$ = this.countService.count$

  constructor(private countService: CountService) {
  }

  addProperty(val: number) {
    this.count+=val
  }

  changeCount(val: number) {
    this._countSubject.next(this._countSubject.value + val)
  }

  changeCountByService(val: number) {
    this.countService.changeCount(val)
  }
}
