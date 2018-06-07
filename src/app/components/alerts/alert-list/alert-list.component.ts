import { Component, OnInit, Input } from '@angular/core';

import { Alert } from '../../../models/alert';

@Component({
  selector: 'alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {
  @Input() alerts:Alert[];
  constructor() { 

  }

  ngOnInit() {
  }

}
