import { Component, Input, OnInit } from '@angular/core'
import { User } from 'src/app/common/emt-schema'
import { Page } from 'src/app/common/model/page'
import { UserService } from 'src/app/common/service/user.service'

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
})
export class HintComponent {
  @Input()
  content: string | null = null
}
