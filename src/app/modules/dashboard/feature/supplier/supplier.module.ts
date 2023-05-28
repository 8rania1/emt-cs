import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { SupplierRoutingModule } from './supplier-routing.module'
import { SupplierListComponent } from './supplier-list/supplier-list.component'
import { SupplierFormComponent } from './supplier-form/supplier-form.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [SupplierListComponent, SupplierFormComponent],
  imports: [SupplierRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, SharedModule,TranslateModule],
  providers: [],
})
export class SupplierModule {}
