import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FormsComponent, TableComponent],
  imports: [UserRoutingModule, CommonModule, FormsModule],
  providers: [],
})
export class UserModule {}
