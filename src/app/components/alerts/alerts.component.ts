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
  constructor(private alertsService:AlertsService) { }

  ngOnInit() {
    this.alertsService.getAlerts().toPromise().then((resp)=>{
      this.alerts = resp.json();
      this.filterGroups = this.generateFilterGroups(this.alerts);
    }, err=>{
    });
  }

  public onAlertSelected(alert:Alert){
    this.selected = alert;
  }

  private generateFilterGroups(alerts:Alert[]){
    let severity = {
      "Type": "Severity",
      "Title": "Severity",
      "Filters": []
    };
    let protocol = {
      "Type":"Protocol",
      "Title":"Protocol",
      "Filters":[]
    };
    let clientIp = {
      "Type":"ClientIP",
      "Title":"Clinet IP",
      "Filters":[]
    };
    let severityFilters = [];
    let protocolFilters = [];
    let clientIpFilters = [];
    alerts.forEach(alert=>{   
      if(severityFilters.indexOf(alert.Severity)===-1){
        severityFilters.push(alert.Severity);
        severity.Filters.push({Type:"Severity", Value:alert.Severity, Count:1});
      }else{
        severity.Filters.find(f=>f.Value===alert.Severity).Count++;
      }
      if(protocolFilters.indexOf(alert.Protocol)===-1){
        protocolFilters.push(alert.Protocol);
        protocol.Filters.push({Type:"Protocal", Value:alert.Protocol, Count:1});
      }else{
        protocol.Filters.find(f=>f.Value===alert.Protocol).Count++;
      }
      if(clientIpFilters.indexOf(alert.ClientIP)===-1){
        clientIpFilters.push(alert.ClientIP);
        clientIp.Filters.push({Type:"ClientIP", Value:alert.ClientIP, Count:1});
      }else{
        clientIp.Filters.find(f=>f.Value===alert.ClientIP).Count++;
      }
    });    
    console.log(protocol)
    return [severity, protocol, clientIp];
  }

}
