import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/emt-schema';
import { Page } from 'src/app/common/model/page';
import { UserService } from 'src/app/common/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService
      .users()
      .subscribe((data: User[]) => (this.users = data));
  }
}
