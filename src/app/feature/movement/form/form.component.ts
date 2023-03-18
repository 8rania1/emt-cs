import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category, Equipment, Reason } from 'src/app/common/emt-schema';
import { EquipmentService } from 'src/app/common/service/equipment.service';
import { MovementService } from 'src/app/common/service/movement.service';
import { ToastrService } from 'ngx-toastr';
import { ReasonService } from 'src/app/common/service/reason.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  equipments: Equipment[] = [];
  reasons: Reason[] | undefined;
  constructor(
    private movementService: MovementService,
    private equipementService: EquipmentService,
    private reasonService: ReasonService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.equipementService.equipments().subscribe({
      next: (data) => (this.equipments = data.content),
    });

  }
  direction(event: any) {
    this.reasonService
    .reasons(event.target.value)
    .subscribe({ next: (data) => (this.reasons = data) });
    console.log(event.target.value);
  }

  submit(movement: NgForm) {
    console.log(JSON.stringify(movement.value));
    this.movementService
      .save(movement.value)
      .subscribe(() => this.toastr.info('success'));
  }
}
