import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/common/emt-schema';
import { SupplierService } from 'src/app/common/service/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
})
export class SupplierListComponent implements OnInit {
  suppliers: Supplier[] = [];
  constructor(private supplierService: SupplierService) { }
  ngOnInit(): void {
    this.supplierService
      .suppliers()
      .subscribe((data: Supplier[]) => (this.suppliers = data));
  }
}
