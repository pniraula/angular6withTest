import { Component, OnInit, Input } from '@angular/core';
import { Alert } from '../../../models/alert';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() filterGroups:any[]; 
  constructor() { 
  
  }
  ngOnInit() {
  }

}
