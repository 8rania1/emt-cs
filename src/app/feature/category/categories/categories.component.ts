import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  @Input()
  categories: Category[] = [];
  constructor() {}
}
