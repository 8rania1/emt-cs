import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reason } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { ReasonService } from 'src/app/common/service/reason.service';
import { ToastService } from 'src/app/common/service/toastr.service';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
})
export class ReasonsComponent implements OnInit {
  reasons: Reason[] = [];
  constructor(
    private reasonService: ReasonService,
    private toastr: ToastService
  ) {}
  ngOnInit(): void {
    this.reasonService.reasons().subscribe({
      next: (data) => (this.reasons = data),
    });
  }
}
