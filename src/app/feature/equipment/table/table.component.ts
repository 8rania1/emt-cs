import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/common/emt-schema';
import { Page } from 'src/app/common/model/page';
import { EquipmentService } from 'src/app/common/service/equipment.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  equipments: Equipment[] = [];
  equipment: Equipment | undefined;

  constructor(private equipmentService: EquipmentService) {}

  ngOnInit(): void {
    this.equipmentService
      .equipments()
      .subscribe((data: Page<Equipment>) => (this.equipments = data.content));
  }

  more(equipement: Equipment) {
    this.equipment = equipement;
  }
}
