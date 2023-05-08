import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  @Output()
  create: EventEmitter<Category> = new EventEmitter<Category>();
  constructor(private categoryService: CategoryService,private avtiveModal:NgbActiveModal) {}

  submit(form: NgForm) {
    this.categoryService.save(form.value).subscribe({
      next: (category: Category) => {
        this.create.emit(category); form.reset(); this.avtiveModal.close(category);
      },
    });
  }
}
