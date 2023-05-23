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
  supplier!: Supplier;
  constructor(
    private supplierService: SupplierService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.supplierService
      .suppliers()
      .subscribe((data: Supplier[]) => (this.suppliers = data));
  }

  select(supplier: Supplier){
    this.supplier = supplier;
  }

  addToList(supplier: Supplier) {
    console.log(JSON.stringify(supplier));
    const filter: Supplier[] = this.suppliers.filter(
      (item) => item.id === supplier.id
    );
    if (filter.length > 0) {
      filter.forEach((item) => {
        item.name = supplier.name;
        item.email = supplier.email;
        item.address = supplier.address;
        item.mobile = supplier.mobile;

        
      });
    } else {
      this.suppliers.push(supplier);
    }
  }


}
