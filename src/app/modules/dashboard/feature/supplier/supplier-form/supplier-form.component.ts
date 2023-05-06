import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Supplier } from 'src/app/common/emt-schema';
import { SupplierService } from 'src/app/common/service/supplier.service';
import { ToastService } from 'src/app/common/service/toastr.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
})
export class SupplierFormComponent {
  constructor(private supplierService: SupplierService,
    private toastr: ToastService, private activeModal: NgbActiveModal) { }

  submit(supplier: NgForm) {
    this.supplierService
      .create(supplier.value)
      .subscribe({
        next: (data: Supplier) => {
          supplier.reset();
          this.toastr.show('success', `supplier ${data.name} added successfuly`);
          this.activeModal.close(data);
        }
      });
  }
}
