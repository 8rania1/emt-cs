import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { Category, User } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { ChartService } from 'src/app/common/service/chart.service';
import { UserService } from 'src/app/common/service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  chart: any;
  @ViewChild('chartContainer', { static: true }) public chartContainer: any;
  charts: Map<string, Chart> = new Map<string, Chart>();
  users: User[] = [];

  constructor(private chartService: ChartService, private userService: UserService) { }
  ngOnInit(): void {
    this.userService.users(true).subscribe({
      next: (data: User[]) => this.users = data
    }
    );
    this.chartService.reasons().subscribe({
      next: (data: any) => this.chart = new Chart('reasons', data)
    })

    this.chartService.categories().subscribe({
      next: (data: Map<string, any>) => {
        Array.from(Object.entries(data)).forEach(entry => {
          let newTitleElem: any = document.createElement("canvas");
          newTitleElem.id = entry[0];
          this.chartContainer.nativeElement.appendChild(newTitleElem);
          newTitleElem.innerHTML = new Chart(entry[0], entry[1]);
        })
      }
    }
    )
  }

}
