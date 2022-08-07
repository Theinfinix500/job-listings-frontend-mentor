import { JobsService } from './services/jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'job-listings-frontend-mentor';
  constructor(private _jobsService: JobsService) {}

  ngOnInit(): void {
    this._jobsService.getJobs().subscribe();
  }
}
