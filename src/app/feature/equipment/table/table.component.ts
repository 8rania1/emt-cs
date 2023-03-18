import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EquipmentDataSource } from 'src/app/common/data-source/equipment.datasource';
import { EquipmentService } from 'src/app/common/service/equipment.service';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit, AfterViewInit {
  dataSource: EquipmentDataSource;
  columns = [
    'serialNumber',
    'version',
    'name',
    'partNumber',
    'active',
    'category',
  ];
  constructor(private equipmentService: EquipmentService) {
    this.dataSource = new EquipmentDataSource(this.equipmentService);
  }

  ngOnInit(): void {
    this.dataSource.load();
  }
  
  ngAfterViewInit(): void {
    feather.replace();
  }
}
