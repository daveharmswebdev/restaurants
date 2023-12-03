import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStaff } from './models/IStaff';

@Injectable()
export class StaffService {
  private readonly baseUrl = 'http://localhost:5243/api/Staff';
  constructor(private http: HttpClient) {}

  getStaff(): Observable<IStaff[]> {
    return this.http.get<IStaff[]>(this.baseUrl);
  }
}
