import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category, Supplier } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { EquipmentService } from 'src/app/common/service/equipment.service';
import { SupplierService } from 'src/app/common/service/supplier.service';
import { ToastService } from 'src/app/common/service/toastr.service';
import { CategoryComponent } from '../../category/form/category.component';
import { SupplierFormComponent } from '../../supplier/supplier-form/supplier-form.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  categories: Category[] = [];
  suppliers: Supplier[] = [];
  constructor(private equipmentService: EquipmentService, private categoryService: CategoryService, private supplierService: SupplierService,
    private modalService: NgbModal, private toastr: ToastService) { }

  ngOnInit(): void {
    this.categoryService.categories().subscribe({
      next: (data) => (this.categories = data),
    });
    this.supplierService.suppliers().subscribe({
      next: (data: Supplier[]) => (this.suppliers = data),
    });
  }

  category() {
    this.modalService.open(CategoryComponent).result
      .then((category: Category) => this.categories.push(category));
  }


  supplier() {
    this.modalService.open(SupplierFormComponent).result
      .then((supplier: Supplier) => this.suppliers.push(supplier));
  }


  submit(equipment: NgForm) {
    this.equipmentService.save(equipment.value).subscribe({
      next: (data) => { equipment.reset(); this.toastr.show('database', 'equipement added') },
    });
  }




}
