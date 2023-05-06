import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  collapsed:boolean = true;
  constructor() {}

  ngOnInit(): void {
  }

  collapse(){
    this.collapsed = !this.collapsed;
  }

}
