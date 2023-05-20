import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category, Equipment, Supplier } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { EquipmentService } from 'src/app/common/service/equipment.service';
import { SupplierService } from 'src/app/common/service/supplier.service';
import { CategoryComponent } from '../../category/form/category.component';
import { SupplierFormComponent } from '../../supplier/supplier-form/supplier-form.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
})
export class EquipmentFormComponent implements OnInit {
  equipmentId: string | null;
  equipment: FormGroup;
  categories: Category[] = [];
  suppliers: Supplier[] = [];
  constructor(
    private builder: FormBuilder,
    private equipmentService: EquipmentService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.equipmentId = this.activatedRoute.snapshot.paramMap.get('equipmentId');
    this.equipment = this.builder.group({
      serialNumber: null,
      version: null,
      name: null,
      partNumber: null,
      category: null,
      supplier: null,
    });
  }

  ngOnInit(): void {
    if (this.equipmentId) {
      this.equipmentService.equipment(parseInt(this.equipmentId)).subscribe({
        next: (data: Equipment) =>
          (this.equipment = this.builder.group({
            id: data.id,
            serialNumber: data.serialNumber,
            version: data.version,
            name: data.name,
            partNumber: data.partNumber,
            category: data.category,
            supplier: data.supplier,
          })),
      });
    }
    this.categoryService.categories().subscribe({
      next: (data) => (this.categories = data),
    });
    this.supplierService.suppliers().subscribe({
      next: (data: Supplier[]) => (this.suppliers = data),
    });
  }

  category() {
    this.modalService
      .open(CategoryComponent)
      .result.then((category: Category) => this.categories.push(category));
  }

  supplier() {
    this.modalService
      .open(SupplierFormComponent)
      .result.then((supplier: Supplier) => this.suppliers.push(supplier));
  }

  submit() {
    if (this.equipmentId) {
      this.equipmentService.edit(this.equipment.value).subscribe({
        next: (data: Equipment) => {
          this.equipment.reset();
          Swal.fire(
            'Updated !',
            `equipment ${data.name} has been updated`,
            'success'
          );

          this.location.back();
        },
      });
    } else {
      this.equipmentService.save(this.equipment.value).subscribe({
        next: (data: Equipment) => {
          this.equipment.reset();
          Swal.fire(
            'Created !',
            `equipment ${data.name} has been created`,
            'success'
          );
        },
      });
    }
  }

  compareFun(item1: any, item2: any) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}
