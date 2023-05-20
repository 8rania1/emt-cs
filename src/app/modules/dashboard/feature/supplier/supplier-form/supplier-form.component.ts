import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Supplier } from 'src/app/common/emt-schema';
import { SupplierService } from 'src/app/common/service/supplier.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
})
export class SupplierFormComponent {
  constructor(private supplierService: SupplierService, private activeModal: NgbActiveModal) { }

  submit(supplier: NgForm) {
    this.supplierService
      .create(supplier.value)
      .subscribe({
        next: (data: Supplier) => {
          supplier.reset();
          Swal.fire('Created !', `supplier ${data.name} has been created`, 'success');
          this.activeModal.close(data);
        }
      });
  }
}
