import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [UserFormComponent, UserListComponent],
  imports: [UserRoutingModule, CommonModule, FormsModule,ReactiveFormsModule],
  providers: [],
})
export class UserModule {}
