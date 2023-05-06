import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovementRoutingModule } from './movement-routing.module';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MovementListComponent } from './movement-list/movement-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'ngx-avatars';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MovementListComponent, FormComponent],
  imports: [MovementRoutingModule, FormsModule, CommonModule, TranslateModule, AvatarModule, NgbTypeaheadModule, SharedModule],
  providers: [],
})
export class MovementModule { }
