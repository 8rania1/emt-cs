import { NgModule } from '@angular/core'
import { DirectionPipe } from './directives/movement-pipe'
import { BooleanPipe } from './directives/boolean-pipe'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { HintComponent } from './components/hint/hint.component'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [DirectionPipe, BooleanPipe, HintComponent],
  imports: [AngularSvgIconModule,TranslateModule],
  exports: [DirectionPipe, BooleanPipe, HintComponent, AngularSvgIconModule],
})
export class SharedModule {}
