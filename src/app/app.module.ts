import { JobsModule } from './jobs/jobs.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributionComponent } from './attribution/attribution.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AttributionComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, JobsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
