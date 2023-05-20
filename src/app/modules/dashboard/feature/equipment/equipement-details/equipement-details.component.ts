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

@Component({
  selector: 'app-equipement-details',
  templateUrl: './equipement-details.component.html',
})
export class EquipementDetailsComponent implements OnChanges,OnInit {
  @Input()
  equipement: Equipment | undefined;
  movements: Movement[] = [];
  constructor(private movementService: MovementService) {}

  ngOnInit(): void {
    this.movementService.movements(this.equipement?.serialNumber).subscribe({
      next: (data:Movement[]) => this.movements = data
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
