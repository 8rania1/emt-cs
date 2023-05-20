import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusListComponent } from './status-list/status-list.component';

const routes: Routes = [{ path: '', component: StatusListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusRoutingModule {}
