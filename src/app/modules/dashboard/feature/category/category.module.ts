import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './form/category.component';
import { TranslateModule } from '@ngx-translate/core';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  declarations: [CategoryComponent, CategoriesListComponent],
  imports: [CategoryRoutingModule,FormsModule,ReactiveFormsModule, TranslateModule, CommonModule, NgbTooltipModule],
  exports: [CategoriesListComponent],
})
export class CategoryModule { }
