import { UserService } from '../../../common/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  active = 'top';
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
  }
}
