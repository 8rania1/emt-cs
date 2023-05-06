import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  OperatorFunction,
  switchMap,
  tap,
} from 'rxjs';
import { Category, Equipment, Reason } from 'src/app/common/emt-schema';
import { EquipmentService } from 'src/app/common/service/equipment.service';
import { MovementService } from 'src/app/common/service/movement.service';
import { ReasonService } from 'src/app/common/service/reason.service';
import { ToastService } from 'src/app/common/service/toastr.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  searching = false;
  searchFailed = false;
  equipments: Equipment[] = [];
  reasons: Reason[] | undefined;
  directions: string[] = [];

  constructor(private movementService: MovementService, private equipementService: EquipmentService,
    private reasonService: ReasonService, private toastr: ToastService) { }

  ngOnInit(): void {
    this.equipementService.equipments().subscribe({
      next: (data) => (this.equipments = data.content),
    });
    this.movementService.directions().subscribe({
      next: (data: string[]) => this.directions = data,
    });


  }

  directionChange(direction: string) {
    this.reasonService
      .reasons(direction)
      .subscribe({ next: (data) => (this.reasons = data) });
  }

  submit(movement: NgForm) {
    console.log(JSON.stringify(movement.value));
    this.movementService
      .save(movement.value)
      .subscribe(() => this.toastr.show('success', 'equipment added'));
  }

  search: OperatorFunction<string, readonly Equipment[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap((term) =>
        this.equipementService.search(term).pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => (this.searching = false))
    );

  formatter = (x: { name: string }) => x.name;
}
