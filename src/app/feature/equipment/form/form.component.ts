import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { EquipmentService } from 'src/app/common/service/equipment.service';
import { ToastService } from 'src/app/common/service/toastr.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  categories: Category[] = [];
  constructor(
    private equipmentService: EquipmentService,
    private categoryService: CategoryService,
    private modalService: NgbModal,
    private toastr: ToastService
  ) {}
  ngOnInit(): void {
    this.categoryService.categories().subscribe({
      next: (data) => (this.categories = data),
    });
  }
  modal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  submit(equipment: NgForm) {
    this.equipmentService.save(equipment.value).subscribe({
      next: (data) =>  {equipment.reset(); this.toastr.show('database', 'equipement added')},
    });
  }
}
