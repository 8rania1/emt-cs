import { UserService } from './../../../common/service/user.service';
import { Supplier, User } from './../../../common/emt-schema';
import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/common/model/page';
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
