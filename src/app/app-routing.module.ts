import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "user", loadChildren: () => import('./feature/user/user.module').then(m => m.UserModule) },
  { path: "equipment", loadChildren: () => import('./feature/equipment/equipment.module').then(m => m.EquipmentModule) },
  { path: "movement", loadChildren: () => import('./feature/movement/movement.module').then(m => m.MovementModule) },
  { path: "reason", loadChildren: () => import('./feature/reason/reason.module').then(m => m.ReasonModule) },
  { path: "settings", loadChildren: () => import('./feature/settings/settings.module').then(m => m.SettingsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
