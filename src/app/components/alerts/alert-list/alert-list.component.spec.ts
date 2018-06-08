import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertListComponent } from './alert-list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../pipes/filter.pipe';

describe('AlertListComponent', () => {
  let component: AlertListComponent;
  let fixture: ComponentFixture<AlertListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertListComponent, FilterPipe ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
