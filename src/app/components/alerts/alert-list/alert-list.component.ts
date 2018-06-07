import { Component, OnInit } from '@angular/core';

import { AlertsService } from '../../../services/alerts.service';

import { Alert } from '../../../models/alert';

@Component({
  selector: 'alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {
  public alerts:Alert[];
  constructor(private alertsService:AlertsService) { 

  }

  ngOnInit() {
    this.alertsService.getAlerts().toPromise().then((resp)=>{
      this.alerts = resp.json();
    }, err=>{
      console.log(err); //error handling
    })
  }

}
