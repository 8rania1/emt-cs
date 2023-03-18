import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { EquipmentService } from 'src/app/common/service/equipment.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  categories: Category[] = [];
  constructor(
    private equipmentService: EquipmentService,
    private categoryService: CategoryService
  ) {}
  ngOnInit(): void {
    this.categoryService.categories().subscribe({
      next: (data) => (this.categories = data),
    });
  }

  submit(equipment: NgForm) {
    console.log(JSON.stringify(equipment.value));
    this.equipmentService

      .save(equipment.value)
      .subscribe(() => console.log('success'));
  }
}
