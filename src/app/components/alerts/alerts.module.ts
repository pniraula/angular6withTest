import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertsComponent } from './alerts.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AlertsComponent,
    AlertListComponent,
    AlertDetailsComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    AlertsComponent,
    AlertListComponent,
    AlertDetailsComponent,
    FiltersComponent
  ]
})
export class AlertsModule { }