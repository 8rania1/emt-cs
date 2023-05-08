import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReasonListComponent } from './reason-list/reason-list.component';
import { ReasonFormComponent } from './reason-form/reason-form.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ReasonFormComponent, ReasonListComponent],
  imports: [CommonModule, FormsModule, TranslateModule],
  exports: [ReasonListComponent]
})
export class ReasonModule { }
