import { Component, OnInit } from '@angular/core';

import { AlertsService } from '../../services/alerts.service';

import { Alert } from '../../models/alert';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  public alerts:Alert[];
  public selected:Alert;
  constructor(private alertsService:AlertsService) { }

  ngOnInit() {
    this.alertsService.getAlerts().toPromise().then((resp)=>{
      this.alerts = resp.json();
    }, err=>{
      console.log(err); //error handling
    });
  }

  public onAlertSelected(alert:Alert){
    this.selected = alert;
  }

}
