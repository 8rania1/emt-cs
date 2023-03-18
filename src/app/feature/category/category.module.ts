import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [FormsModule],
  exports: [FormComponent],
  providers: [],
})
export class CategoryModule {}
