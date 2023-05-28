import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'
import { StatusFormComponent } from './status-form/status-form.component'
import { StatusListComponent } from './status-list/status-list.component'
import { StatusRoutingModule } from './status-routing.module'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [StatusFormComponent, StatusListComponent],
  imports: [StatusRoutingModule, CommonModule, FormsModule, TranslateModule, SharedModule],
  exports: [StatusListComponent],
})
export class StatusModule {}
