import { JobsModule } from './jobs/jobs.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributionComponent } from './attribution/attribution.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [AppComponent, AttributionComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, JobsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
