import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/common/service/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {}

  submit(category: NgForm) {
    this.categoryService.save(category.value).subscribe({
      next: () => this.toastr.info('success'),
    });
  }
}
