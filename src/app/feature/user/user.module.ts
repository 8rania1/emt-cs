import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  declarations: [FormsComponent, TableComponent],
  imports: [UserRoutingModule, FormsModule, CdkTableModule],
  providers: [],
})
export class UserModule { }
