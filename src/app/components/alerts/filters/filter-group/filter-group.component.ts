import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../../../models/filter';

@Component({
  selector: 'filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss']
})
export class FilterGroupComponent implements OnInit {
  @Input() title:string;
  @Input() filters:Filter[]; 
  @Output() onFileterSelected:EventEmitter<Filter> = new EventEmitter<Filter>();
  public selected:Filter;
  constructor() { }

  ngOnInit() {
  }

  public selectFilter(filter:Filter){
    this.selected = filter;
    this.onFileterSelected.emit(filter);
  }
}
