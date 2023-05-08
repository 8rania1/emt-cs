import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementListComponent } from './movement-list/movement-list.component';
import { MovementFormComponent } from './movement-form/movement-form.component';

const routes: Routes = [
  { path: '', component: MovementListComponent },
  { path: 'movement', component: MovementFormComponent, data: { breadcrumb: 'add movement' } },
  { path: 'movement/:serialNumber', component: MovementFormComponent, data: { breadcrumb: 'add movement' } },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovementRoutingModule { }
