import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MovementListComponent } from './movement-list/movement-list.component';

const routes: Routes = [
  { path: '', component: MovementListComponent },
  { path: 'movement', component: FormComponent },
  { path: 'movement/:serialNumber', component: FormComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovementRoutingModule {}
