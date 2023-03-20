import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reason } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { ReasonService } from 'src/app/common/service/reason.service';
import { ToastService } from 'src/app/common/service/toastr.service';

@Component({
  selector: 'app-reason-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  reasons:Reason[] = []; 
  constructor(
    private reasonService: ReasonService,
    private toastr: ToastService
  ) {}
  ngOnInit(): void {
    this.reasonService.reasons().subscribe({
      next:data=> this.reasons = data
    })
  }

  submit(reason: NgForm) {
    this.reasonService.save(reason.value).subscribe({
      next: () => this.toastr.show('success','reason added'),
    });
  }
}
