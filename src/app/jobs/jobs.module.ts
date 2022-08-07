import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobCardComponent } from './components/job-card/job-card.component';

@NgModule({
  declarations: [JobsComponent, JobListComponent, JobCardComponent],
  imports: [CommonModule],
  exports: [JobsComponent],
})
export class JobsModule {}
