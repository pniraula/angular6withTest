import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Alert } from '../../../models/alert';
import { Filter } from '../../../models/filter';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() filterGroups:any[]; 
  @Output() onFileterSelected:EventEmitter<Filter> = new EventEmitter<Filter>();
  public selectedFilter:Filter;
  constructor() { 
  
  }
  ngOnInit() {
  }
  applyFilter(filter:Filter){
    this.selectedFilter = filter;
    this.onFileterSelected.emit(filter);
  }
  clearFilter(filter:Filter){
    this.selectedFilter = undefined;
    this.onFileterSelected.emit();
  }
}
