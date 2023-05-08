import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNaveComponent  {
  @Input()
  collapsed:boolean = true;
  
}
