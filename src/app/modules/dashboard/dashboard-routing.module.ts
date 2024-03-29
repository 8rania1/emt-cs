import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './@shared/dashboard/dashboard.component';
import { HomeComponent } from './feature/home/home/home.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: "", component:HomeComponent },
      { path: "equipment", loadChildren: () => import('./feature/equipment/equipment.module').then(m => m.EquipmentModule) },
      { path: "movement", loadChildren: () => import('./feature/movement/movement.module').then(m => m.MovementModule) },
      { path: "user", loadChildren: () => import('./feature/user/user.module').then(m => m.UserModule) },
      { path: "supplier", loadChildren: () => import('./feature/supplier/supplier.module').then(m => m.SupplierModule) },
      { path: "status", loadChildren: () => import('./feature/status/status.module').then(m => m.StatusModule) },
      { path: "category", loadChildren: () => import('./feature/category/category.module').then(m => m.CategoryModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
