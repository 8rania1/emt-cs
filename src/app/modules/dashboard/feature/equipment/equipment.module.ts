import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EquipmentRoutingModule } from './equipment-routing.module';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { CategoryModule } from '../category/category.module';
import { EquipementDetailsComponent } from './equipement-details/equipement-details.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SupplierModule } from '../supplier/supplier.module';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FormComponent,
    EquipmentListComponent,
    EquipementDetailsComponent,

  ],
  imports: [
    EquipmentRoutingModule,
    FormsModule,
    CommonModule,
    CategoryModule, SupplierModule,
    NgbAccordionModule, SharedModule
  ],
  providers: [],
})
export class EquipmentModule { }
