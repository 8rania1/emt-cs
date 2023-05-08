import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/common/service/user.service';

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
