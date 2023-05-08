import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Equipment } from 'src/app/common/emt-schema';
import { Page } from 'src/app/common/model/page';
import { EquipmentService } from 'src/app/common/service/equipment.service';
import { EquipementDetailsComponent } from '../equipement-details/equipement-details.component';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
})
export class EquipmentListComponent implements OnInit {
  equipments: Equipment[] = [];

  constructor(private equipmentService: EquipmentService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.equipmentService
      .equipments()
      .subscribe((data: Page<Equipment>) => (this.equipments = data.content));
  }

  more(equipement: Equipment) {
    const modalRef = this.modalService.open(EquipementDetailsComponent);
    modalRef.componentInstance.equipement = equipement;


  }
}
