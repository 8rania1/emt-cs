import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { CategoryComponent } from '../form/category.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent {
  @Input()
  categories: Category[] = [];
  constructor(private modalService: NgbModal) { }


  category() {
    this.modalService.open(CategoryComponent).result
      .then((category: Category) => this.categories.push(category));
  }

}
