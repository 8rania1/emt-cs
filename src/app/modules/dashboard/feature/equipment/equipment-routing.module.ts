import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';

const routes: Routes = [
  { path: "", component: EquipmentListComponent },
  { path: "equipment", component: EquipmentFormComponent, data: { breadcrumb: 'add' } },
  { path: "equipment/:equipmentId", component: EquipmentFormComponent, data: { breadcrumb: 'edit' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
