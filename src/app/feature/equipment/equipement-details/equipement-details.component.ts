import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category, Equipment, Movement } from 'src/app/common/emt-schema';
import { CategoryService } from 'src/app/common/service/category.service';
import { EquipmentService } from 'src/app/common/service/equipment.service';
import { MovementService } from 'src/app/common/service/movement.service';
import { ToastService } from 'src/app/common/service/toastr.service';

@Component({
  selector: 'app-equipement-details',
  templateUrl: './equipement-details.component.html',
})
export class EquipementDetailsComponent implements OnChanges {
  @Input()
  equipement: Equipment | undefined;
  movements: Movement[] = [];
  constructor(private movementService: MovementService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.movementService.movements().subscribe({
      next: (data) => (this.movements = data.content),
    });
  }
}
