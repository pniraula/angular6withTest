import {  NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';

const routes: Routes = [{
  path: '',
  component: AlertsComponent,
}, ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}
