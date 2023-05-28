import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovementRoutingModule } from './movement-routing.module';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MovementListComponent } from './movement-list/movement-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'ngx-avatars';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileSaverModule } from 'ngx-filesaver';
import { MovementFilterComponent } from './movement-filter/movement-filter.component';


@NgModule({
  declarations: [MovementListComponent,MovementFilterComponent],
  imports: [MovementRoutingModule, FormsModule, ReactiveFormsModule, CommonModule, TranslateModule, AvatarModule, 
    SharedModule,FileSaverModule,NgbDatepickerModule],
  providers: [],
})
export class MovementModule { }
