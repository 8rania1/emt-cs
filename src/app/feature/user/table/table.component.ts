import { UserService } from './../../../common/service/user.service';
import { User } from './../../../common/emt-schema';
import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/common/model/page';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService
      .users()
      .subscribe((data: Page<User>) => (this.users = data.content));
  }
}
