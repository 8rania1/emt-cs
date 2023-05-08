import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Reason } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { MovementService } from 'src/app/common/service/movement.service';
import { ReasonService } from 'src/app/common/service/reason.service';
import { ToastService } from 'src/app/common/service/toastr.service';

@Component({
  selector: 'app-reason-form',
  templateUrl: './reason-form.component.html',
})
export class ReasonFormComponent implements OnInit {
  directions: string[] = [];
  constructor(private reasonService: ReasonService,private movementService:MovementService, private toastr: ToastService, private aciveModal: NgbActiveModal) { }
  ngOnInit(): void {
    this.movementService.directions().subscribe({
      next: (data: string[]) => this.directions = data,
    });
  }


  submit(reason: NgForm) {
    this.reasonService.save(reason.value).subscribe({
      next: (reason: Reason) => this.aciveModal.close(reason),
    });
  }
}
