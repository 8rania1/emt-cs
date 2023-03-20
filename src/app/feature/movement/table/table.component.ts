import { Component, OnInit } from '@angular/core';
import { MovementService } from 'src/app/common/service/movement.service';
import { Page } from 'src/app/common/model/page';
import { Movement } from 'src/app/common/emt-schema';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  movements: Movement[] = [];

  constructor(private movementService: MovementService) {}
  ngOnInit(): void {
    this.movementService.movements().subscribe({
      next: (data: Page<Movement>) => {
        this.movements = data.content;
      },
    });
  }
}
