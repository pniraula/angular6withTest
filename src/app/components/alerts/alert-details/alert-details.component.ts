import { Component, OnInit, Input,} from '@angular/core';

import { Alert } from '../../../models/alert';
@Component({
  selector: 'alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.scss']
})
export class AlertDetailsComponent implements OnInit {
  @Input() alert:Alert;

  constructor() { }

  ngOnInit() {}


}
