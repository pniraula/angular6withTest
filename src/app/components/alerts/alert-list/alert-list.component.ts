import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Alert } from '../../../models/alert';

@Component({
  selector: 'alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {
  @Input() alerts:Alert[];
  @Output() onAlertSelected:EventEmitter<Alert> = new EventEmitter<Alert>();
  public selected:Alert;
  constructor() { 

  }

  ngOnInit() {
  }
  public selectAlert(alert:Alert){
    this.selected = alert; 
    this.onAlertSelected.emit(alert);
  }
}
