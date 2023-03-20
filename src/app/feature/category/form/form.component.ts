import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Output()
  create: EventEmitter<Category> = new EventEmitter<Category>();
  constructor(private categoryService: CategoryService) {}

  submit(form: NgForm) {
    this.categoryService.save(form.value).subscribe({
      next: (data: Category) => {
        this.create.emit(data), form.reset();
      },
    });
  }
}
