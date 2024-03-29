import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent implements OnInit {
  @Input()
  categories: Category[] = [];
  category!: Category;
  constructor(
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.categoryService.categories().subscribe({
      next: (data: Category[]) => (this.categories = data),
    });
  }

  select(category: Category) {
    this.category = category;
  }

  addToList(category: Category) {
    const filter: Category[] = this.categories.filter(
      (item) => item.id === category.id
    );
    if (filter.length > 0) {
      filter.forEach((item) => {
        item.name = category.name;
        item.description = category.description;
        item.threshold = category.threshold;
      });
    } else {
      this.categories.push(category);
    }
  }

  delete(index: number, category: Category) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.delete(category.id).subscribe({
          next: () => {
            this.categories.splice(index, 1);
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          },
        });
      }
    });
  }
}
