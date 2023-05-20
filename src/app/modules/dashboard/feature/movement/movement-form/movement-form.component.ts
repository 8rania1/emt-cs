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
import {
  Category,
  Equipment,
  Movement,
  Status,
} from 'src/app/common/emt-schema';
import { EquipmentService } from 'src/app/common/service/equipment.service';
import { MovementService } from 'src/app/common/service/movement.service';
import { StatusService } from 'src/app/common/service/status.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movement-form',
  templateUrl: './movement-form.component.html',
})
export class MovementFormComponent implements OnInit {
  searching = false;
  searchFailed = false;
  equipments: Equipment[] = [];
  statuses: Status[] | undefined;
  directions: string[] = [];

  movement: FormGroup;

  constructor(
    private builder: FormBuilder,
    private movementService: MovementService,
    private equipementService: EquipmentService,
    private statusService: StatusService,
    private activatedRoute: ActivatedRoute
  ) {
    this.movement = this.builder.group({
      equipment: null,
      direction: null,
      status: [null, Validators.required],
      note: null,
    });
  }

  ngOnInit(): void {
    const equipmentId: string | null =
      this.activatedRoute.snapshot.paramMap.get('equipmentId');
    if (equipmentId) {
      this.equipementService.equipment(parseInt(equipmentId)).subscribe({
        next: (data: Equipment) =>
          this.movement.controls['equipment'].setValue(data),
      });
    }

    this.equipementService.equipments().subscribe({
      next: (data) => (this.equipments = data.content),
    });
    this.movementService.directions().subscribe({
      next: (data: string[]) => (this.directions = data),
    });
  }

  directionChange(direction: string) {
    this.statusService
      .collection(direction)
      .subscribe({ next: (data) => (this.statuses = data) });
  }

  submit() {
    this.movementService
      .save(this.movement.value)
      .subscribe((data: Movement) => {
        this.movement.reset();
        Swal.fire(
          'moved !',
          `equipment ${data.equipment.name} has been moved`,
          'success'
        );
      });
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
