import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './form/category.component';
import { TranslateModule } from '@ngx-translate/core';
import { CategoriesListComponent } from './categories-list/categories-list.component';

@NgModule({
  declarations: [CategoryComponent, CategoriesListComponent],
  imports: [FormsModule, TranslateModule, CommonModule, NgbTooltipModule],
  exports: [CategoriesListComponent],
})
export class CategoryModule { }
