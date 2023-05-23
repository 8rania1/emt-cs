import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Supplier } from 'src/app/common/emt-schema';
import { SupplierService } from 'src/app/common/service/supplier.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
})
export class SupplierFormComponent implements OnChanges {
  @Input()
  supplier: Supplier | undefined;
  form: FormGroup;
  @Output()
  create: EventEmitter<Supplier> = new EventEmitter<Supplier>();

  constructor(
    private builder: FormBuilder,
    private supplierService: SupplierService
  ) {
    this.form = this.builder.group({
      name: null,
      email: null,
      address: null,
      mobile: null,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.builder.group({
      id: this.supplier?.id,
      name: this.supplier?.name,
      email: this.supplier?.email,
      address: this.supplier?.address,
      mobile: this.supplier?.mobile,
    });
  }

  submit() {
    this.supplierService.create(this.form.value).subscribe({
      next: (data: Supplier) => {
        this.form.reset();
        this.create.emit(data);
        Swal.fire(
          'Created !',
          `supplier ${data.name} has been created`,
          'success'
        );
      },
    });
  }
}
