import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { ReasonRoutingModule } from './reason-routing.module';
import { ReasonsComponent } from './reasons/reasons.component';

@NgModule({
  declarations: [FormComponent, ReasonsComponent, DashboardComponent],
  imports: [ReasonRoutingModule, CommonModule, FormsModule],
  exports: [DashboardComponent]
})
export class ReasonModule {}
