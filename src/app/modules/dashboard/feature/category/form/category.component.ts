import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnChanges {
  @Input()
  category: Category | undefined;
  form: FormGroup;

  @Output()
  create: EventEmitter<Category> = new EventEmitter<Category>();
  constructor(
    private builder: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.form = this.builder.group({
      name: null,
      description: null,
      threshold: null,
    });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.builder.group({
      id: this.category?.id,
      name: this.category?.name,
      description: this.category?.description,
      threshold: this.category?.threshold,
    });
  }

  submit() {
    this.categoryService.save(this.form.value).subscribe({
      next: (category: Category) => {
        this.form.reset();
        this.create.emit(category);
      },
    });
  }
}
