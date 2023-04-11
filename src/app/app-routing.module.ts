import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ToolsComponent } from './tools/tools.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"forms",component:FormsComponent},
  {path:"user",component:UserComponent},
  {path:"tools",component:ToolsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
