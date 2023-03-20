import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovementRoutingModule } from './movement-routing.module';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TableComponent, FormComponent],
  imports: [
    MovementRoutingModule,
    FormsModule,
    CommonModule,
    NgbTypeaheadModule,
  ],
  providers: [],
})
export class MovementModule {}
