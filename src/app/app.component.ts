import { JobsService } from './services/jobs.service';
import { Component, OnInit } from '@angular/core';
import { Job } from './models/job.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'job-listings-frontend-mentor';
  jobs: Job[] = [];

  constructor(private _jobsService: JobsService) {}

  ngOnInit(): void {
    this._jobsService.getJobs().subscribe((jobs) => (this.jobs = jobs));
  }
}
