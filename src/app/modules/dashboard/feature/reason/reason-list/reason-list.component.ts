import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reason } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { ReasonService } from 'src/app/common/service/reason.service';
import { ToastService } from 'src/app/common/service/toastr.service';
import { ReasonFormComponent } from '../reason-form/reason-form.component';

@Component({
  selector: 'app-reason-list',
  templateUrl: './reason-list.component.html',
})
export class ReasonListComponent implements OnInit {
  reasons: Reason[] = [];
  constructor(private reasonService: ReasonService,private toastr: ToastService,private modalService: NgbModal) {}
  ngOnInit(): void {
    this.reasonService.reasons().subscribe({
      next: (data) => (this.reasons = data),
    });
  }

  reason() {
    this.modalService.open(ReasonFormComponent).result
      .then((reason: Reason) => this.reasons.push(reason));
  }
}
