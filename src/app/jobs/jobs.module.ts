import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [JobsComponent, TestComponent],
  imports: [CommonModule],
  exports: [JobsComponent],
})
export class JobsModule {}
