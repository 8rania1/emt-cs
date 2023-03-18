import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { EquipmentRoutingModule } from './equipment-routing.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { CategoryModule } from '../category/category.module';

@NgModule({
  declarations: [FormComponent, TableComponent],
  imports: [
    EquipmentRoutingModule,
    FormsModule,
    CommonModule,
    CdkTableModule,
    CategoryModule,
  ],
  providers: [],
})
export class EquipmentModule {}
