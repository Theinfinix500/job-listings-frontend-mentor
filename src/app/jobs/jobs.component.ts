import { Job } from './../models/job.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [{} as Job, {} as Job];

  constructor() {}

  ngOnInit(): void {}
}
