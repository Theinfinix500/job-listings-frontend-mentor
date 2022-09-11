import { Job } from './../models/job.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  @Input() jobs: Job[] = [];

  constructor() {}

  ngOnInit(): void {}
}
