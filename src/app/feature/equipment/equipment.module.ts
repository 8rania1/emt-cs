import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EquipmentRoutingModule } from './equipment-routing.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { CategoryModule } from '../category/category.module';
import { EquipementDetailsComponent } from './equipement-details/equipement-details.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { BooleanPipe } from 'src/app/shared/directives/boolean-pipe';
import { DirectionPipe } from 'src/app/shared/directives/movement-pipe';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    EquipementDetailsComponent,
    BooleanPipe,
    DirectionPipe,
  ],
  imports: [
    EquipmentRoutingModule,
    FormsModule,
    CommonModule,
    CategoryModule,
    NgbAccordionModule,
  ],
  providers: [],
})
export class EquipmentModule {}
