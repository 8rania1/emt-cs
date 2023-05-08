import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-movement-form',
  templateUrl: './movement-form.component.html',
})
export class MovementFormComponent implements OnInit {
  searching = false;
  searchFailed = false;
  equipments: Equipment[] = [];
  reasons: Reason[] | undefined;
  directions: string[] = [];

  movement: FormGroup;


  constructor(private builder: FormBuilder, private movementService: MovementService, private equipementService: EquipmentService,
    private reasonService: ReasonService, private toastr: ToastService, private activatedRoute: ActivatedRoute) {
    this.movement = this.builder.group({ equipment: null, direction: null, reason: [null, Validators.required], note: null });
  }

  ngOnInit(): void {
    const equipmentId: string | null = this.activatedRoute.snapshot.paramMap.get('equipmentId');
    if (equipmentId) {
      this.equipementService.equipment(parseInt(equipmentId)).subscribe({
        next: (data: Equipment) => this.movement.controls['equipment'].setValue(data)
      }
      )

    }


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

  submit() {
    this.movementService
      .save(this.movement.value)
      .subscribe(() => { this.movement.reset(); this.toastr.show('success', 'equipment added') });
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
