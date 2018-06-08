import { Component, OnInit } from '@angular/core';

import { AlertsService } from '../../services/alerts.service';

import { Alert } from '../../models/alert';
import { FilterGroup } from '../../models/filterGroup';
import { Filter } from '../../models/filter';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  public alerts:Alert[];
  public selected:Alert;
  public filterGroups:FilterGroup[];
  private originalAlerts:Alert[];
  constructor(private alertsService:AlertsService) { }

  ngOnInit() {
    this.alertsService.getAlerts().toPromise().then((data)=>{
      this.alerts = data;
      this.filterGroups = this.generateFilterGroups(this.alerts);
    }, err=>{
    });
  }

  public onAlertSelected(alert:Alert){
    this.selected = alert;
  }

  public onSelectedFilter(filter:Filter){
    if(!filter){
      this.alerts = Object.assign([], this.originalAlerts);
      return;
    }
    if(!this.originalAlerts){
      this.originalAlerts = Object.assign([], this.alerts);
    }
    this.alerts = this.originalAlerts.filter(alert=>alert[filter.Type] === filter.Value);
  }

  //load filters dynamically
  private generateFilterGroups(alerts:Alert[]){
    let filterGroups = [{
      "Type": "Severity",
      "Title": "Severity",
      "Filters": []
    },{
      "Type":"Protocol",
      "Title":"Protocol",
      "Filters":[]
    }, {
      "Type":"ClientIP",
      "Title":"Clinet IP",
      "Filters":[]
    }];
    return alerts.reduce((accumulator, alert)=>{ 
      accumulator.map(filterGroup=>{
        let existingFilter = filterGroup.Filters.find(filter=>filter.Type === filterGroup.Type 
          && filter.Value === alert[filterGroup.Type]);
        if(!existingFilter){ 
          return filterGroup.Filters.push({Type:filterGroup.Type, Value:alert[filterGroup.Type], Count:1});
        }else{
          return existingFilter.Count++;
        }        
      });
      return accumulator;
    }, filterGroups); 
  }

}
