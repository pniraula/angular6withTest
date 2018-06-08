import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertsService } from '../../services/alerts.service';

import { AlertsComponent } from './alerts.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { FiltersComponent } from './filters/filters.component';
import { FilterGroupComponent } from './filters/filter-group/filter-group.component';


import { FilterPipe} from '../../pipes/filter.pipe';

@NgModule({
  declarations: [
    AlertsComponent,
    AlertListComponent,
    AlertDetailsComponent,
    FiltersComponent,
    FilterGroupComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers:[AlertsService],
  exports:[
    AlertsComponent,
    AlertListComponent,
    AlertDetailsComponent,
    FiltersComponent,
    FilterGroupComponent 
  ]
})
export class AlertsModule { }
