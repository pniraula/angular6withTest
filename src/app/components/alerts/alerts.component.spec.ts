import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AlertsComponent } from './alerts.component';
import { Observable, of } from 'rxjs';
import { AlertsService } from '../../services/alerts.service';
import { FilterGroupComponent } from './filters/filter-group/filter-group.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { FiltersComponent } from './filters/filters.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { Alert } from '../../models/alert';

class MockAlertsService{
  public getAlerts():Observable<Alert[]>{
    return of([ {
      "AlertId": 1,
      "AlertTime": "2018-02-26 07:59:22",
      "Severity": "Low",
      "ClientIP": "155.175.121.134",
      "ServerIP": "154.224.236.156",
      "Protocol": "SMTP",
      "ClientCountry": "Canada"
    },
    {
      "AlertId": 2,
      "AlertTime": "2018-02-21 15:28:26",
      "Severity": "Medium",
      "ClientIP": "155.175.121.134",
      "ServerIP": "142.6.126.64",
      "Protocol": "FTP",
      "ClientCountry": "Germany"
    },
    {
      "AlertId": 3,
      "AlertTime": "2018-02-20 19:17:57",
      "Severity": "High",
      "ClientIP": "155.175.121.134",
      "ServerIP": "231.122.227.147",
      "Protocol": "FTP",
      "ClientCountry": "United States"
    }]);
  }
}
describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;
  let alertsService:AlertsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsComponent, FiltersComponent, FilterPipe, AlertListComponent, AlertDetailsComponent, FilterGroupComponent ],
      imports:[FormsModule],
      providers: [
        {provide: AlertsService, useClass: MockAlertsService}
      ]
    }).compileComponents(); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    alertsService = TestBed.get(AlertsService);
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load alerts', ()=>{     
    component.ngOnInit();
    fixture.whenStable().then(()=>{
      expect(component.alerts.length).toBe(3);
    });
  });
  it('should generate filterGroups',()=>{
    component.ngOnInit();
    fixture.whenStable().then(()=>{
      expect(component.filterGroups.length).toBe(3);
    });
  });
  it('should generate Severity filters in filterGroups',()=>{
    component.ngOnInit();
    fixture.whenStable().then(()=>{
      expect(component.filterGroups[0].Filters.length).toBe(3);
    });
  });
  it('should generate Protoool filters in filterGroups',()=>{
    component.ngOnInit();
    fixture.whenStable().then(()=>{
      expect(component.filterGroups[1].Filters.length).toBe(2);
    });
  });
  it('should generate Client IP filters in filterGroups',()=>{
    component.ngOnInit();
    fixture.whenStable().then(()=>{
      expect(component.filterGroups[2].Filters.length).toBe(1);
    });
  });
});
