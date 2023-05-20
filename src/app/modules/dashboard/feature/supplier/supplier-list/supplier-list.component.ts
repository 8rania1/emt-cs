import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/common/emt-schema';
import { SupplierService } from 'src/app/common/service/supplier.service';
import { SupplierFormComponent } from '../supplier-form/supplier-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
})
export class SupplierListComponent implements OnInit {
  suppliers: Supplier[] = [];
  constructor(
    private supplierService: SupplierService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.supplierService
      .suppliers()
      .subscribe((data: Supplier[]) => (this.suppliers = data));
  }

  supplier() {
    this.modalService
      .open(SupplierFormComponent)
      .result.then((supplier: Supplier) => this.suppliers.push(supplier));
  }
}
