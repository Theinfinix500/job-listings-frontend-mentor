import { Job } from './../models/job.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JobsService {
  constructor(private _http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this._http
      .get<Job[]>('assets/data/data.json')
      .pipe(tap((jobs) => console.log(jobs)));
  }
}
