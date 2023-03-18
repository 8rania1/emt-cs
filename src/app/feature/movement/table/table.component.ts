import { UserService } from './../../../common/service/user.service';
import { UserDataSource } from './../../../common/data-source/user.datasource';
import { User } from './../../../common/emt-schema';
import { Component, OnInit } from '@angular/core';
import { EquipmentDataSource } from 'src/app/common/data-source/equipment.datasource';
import { EquipmentService } from 'src/app/common/service/equipment.service';
import { MovementDataSource } from 'src/app/common/data-source/movement.datasource';
import { MovementService } from 'src/app/common/service/movement.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  dataSource: MovementDataSource;
  columns = ['date', 'direction', 'equipment', 'reason', 'note'];
  constructor(private movementService: MovementService) {
    this.dataSource = new MovementDataSource(this.movementService);
  }
  ngOnInit(): void {
    this.dataSource.load();
  }
}
