import { NgModule } from '@angular/core';
import { DirectionPipe } from './directives/movement-pipe';
import { BooleanPipe } from './directives/boolean-pipe';

@NgModule({
  declarations: [DirectionPipe,BooleanPipe],
  imports: [],
  exports: [DirectionPipe,BooleanPipe]
})
export class SharedModule { }
