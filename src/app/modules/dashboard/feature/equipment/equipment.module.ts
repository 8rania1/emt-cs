import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquipmentRoutingModule } from './equipment-routing.module';
import { CommonModule } from '@angular/common';
import { CategoryModule } from '../category/category.module';
import { EquipementDetailsComponent } from './equipement-details/equipement-details.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SupplierModule } from '../supplier/supplier.module';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [EquipmentFormComponent, EquipmentListComponent, EquipementDetailsComponent],
  imports: [EquipmentRoutingModule, FormsModule, ReactiveFormsModule, CommonModule, CategoryModule, SupplierModule, NgbAccordionModule, SharedModule, TranslateModule],
  providers: [],
})
export class EquipmentModule { }
