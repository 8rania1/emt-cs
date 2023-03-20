import { SettingsRoutingModule } from './settings-routing.module';
import { NgModule } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReasonModule } from '../reason/reason.module';
import { CategoryModule } from '../category/category.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SettingsRoutingModule, ReasonModule, CategoryModule, NgbNavModule],
  providers: [],
})
export class SettingsModule {}
