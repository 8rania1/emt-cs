import { UserService } from './../../../common/service/user.service';
import { UserDataSource } from './../../../common/data-source/user.datasource';
import { User } from './../../../common/emt-schema';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  dataSource: UserDataSource;
  constructor(private userService: UserService) {
    this.dataSource = new UserDataSource(this.userService);
  }
  ngOnInit(): void {
    this.dataSource.load();
  }
}
