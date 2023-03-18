import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ReasonRoutingModule } from './reason-routing.module';

@NgModule({
  declarations: [FormComponent],
  imports: [ReasonRoutingModule, FormsModule],
  exports: [],
  providers: [],
})
export class ReasonModule {}
