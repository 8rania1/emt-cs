import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'
import {  Equipment, Filter } from 'src/app/common/emt-schema'
import { Page } from 'src/app/common/model/page'
import { EquipmentService } from 'src/app/common/service/equipment.service'

@Component({
  selector: 'app-movement-filter',
  templateUrl: './movement-filter.component.html',
})
export class MovementFilterComponent implements OnInit {
  form: FormGroup
  equipments: Equipment[] = []
  @Output()
  filter = new EventEmitter<Filter>()
  @Output()
  clear = new EventEmitter<void>()
  constructor(private builder: FormBuilder, private equipmentService: EquipmentService) {
    this.form = this.builder.group({
      equipment: null,
      startDate: null,
      endDate: null,
    })
  }

  ngOnInit(): void {
    this.equipmentService.equipments().subscribe({
      next: (data: Page<Equipment>) => (this.equipments = data.content),
    })
  }

  submit() {
    this.filter.emit(this.form.value as Filter)
  }

  reset() {
   this.form.reset();
   this.clear.emit();
  }
}
