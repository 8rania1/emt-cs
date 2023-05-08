import { Component, OnInit } from '@angular/core';
import { MovementService } from 'src/app/common/service/movement.service';
import { Page } from 'src/app/common/model/page';
import { Movement } from 'src/app/common/emt-schema';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
})
export class MovementListComponent implements OnInit {
  movements: Movement[] = [];

  constructor(private movementService: MovementService) { }
  ngOnInit(): void {
    this.movementService.movements().subscribe({
      next: (data: Movement[]) => this.movements = data
    });
  }
}
