import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category, Reason } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { ReasonService } from 'src/app/common/service/reason.service';
import { ToastService } from 'src/app/common/service/toastr.service';

@Component({
  selector: 'app-categories-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  categories: Category[] = [];
  constructor(
    private categoryService: CategoryService,
    private toastr: ToastService
  ) {}
  ngOnInit(): void {
    this.categoryService.categories().subscribe({
      next: (data) => (this.categories = data),
    });
  }

  create(category: Category) {
    this.categories.push(category);
  }
}
