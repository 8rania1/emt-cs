import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Status } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { MovementService } from 'src/app/common/service/movement.service';
import { StatusService } from 'src/app/common/service/status.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
})
export class StatusFormComponent implements OnInit {
  directions: string[] = [];
  constructor(
    private statusService: StatusService,
    private movementService: MovementService,
    private aciveModal: NgbActiveModal
  ) {}
  ngOnInit(): void {
    this.movementService.directions().subscribe({
      next: (data: string[]) => (this.directions = data),
    });
  }

  submit(reason: NgForm) {
    this.statusService.save(reason.value).subscribe({
      next: (reason: Status) => this.aciveModal.close(reason),
    });
  }
}
