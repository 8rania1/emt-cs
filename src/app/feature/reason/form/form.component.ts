import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/common/service/category.service';
import { ReasonService } from 'src/app/common/service/reason.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  constructor(private reasonService: ReasonService) {}

  submit(reason: NgForm) {
    this.reasonService.save(reason.value).subscribe({
      // next: () => this.toastr.info('success'),
    });
  }
}
