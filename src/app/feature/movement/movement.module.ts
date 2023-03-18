import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { MovementRoutingModule } from './movement-routing.module';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [TableComponent, FormComponent],
  imports: [MovementRoutingModule, FormsModule, CommonModule, CdkTableModule],
  providers: [],
})
export class MovementModule {}
