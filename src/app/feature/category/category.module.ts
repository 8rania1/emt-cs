import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormComponent, CategoriesComponent, DashboardComponent],
  imports: [FormsModule, CommonModule,NgbTooltipModule],
  exports: [DashboardComponent],
})
export class CategoryModule {}
