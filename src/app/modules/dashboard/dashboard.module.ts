import { CommonModule } from '@angular/common';
import { DashboardComponent } from './@shared/dashboard/dashboard.component';
import { HeaderComponent } from './@shared/header/header.component';
import { SideNaveComponent } from './@shared/side-nav/side-nav.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'ngx-avatars';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { HomeComponent } from './feature/home/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SideNaveComponent,HomeComponent],
  imports: [DashboardRoutingModule, CommonModule,SharedModule, AvatarModule, NgbDropdownModule,BreadcrumbModule]
})
export class DashboardModule { }
