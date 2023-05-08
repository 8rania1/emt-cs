import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovementRoutingModule } from './movement-routing.module';
import { CommonModule } from '@angular/common';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MovementListComponent } from './movement-list/movement-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'ngx-avatars';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovementFormComponent } from './movement-form/movement-form.component';


@NgModule({
  declarations: [MovementListComponent, MovementFormComponent],
  imports: [MovementRoutingModule, FormsModule, ReactiveFormsModule, CommonModule, TranslateModule, AvatarModule, NgbTypeaheadModule, SharedModule],
  providers: [],
})
export class MovementModule { }
