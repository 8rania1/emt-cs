import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SupplierListComponent, SupplierFormComponent],
  imports: [SupplierRoutingModule, CommonModule, FormsModule],
  providers: [],
})
export class SupplierModule { }
