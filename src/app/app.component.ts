import { Component, OnInit } from '@angular/core';
import { RxStompService } from './common/stomp/rx-stomp.service';
import { Message } from '@stomp/stompjs';
import { Notification } from './common/emt-schema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent  {
  constructor() {}
}
