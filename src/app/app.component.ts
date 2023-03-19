import { Component, OnInit } from '@angular/core';
import { RxStompService } from './common/stomp/rx-stomp.service';
import { Message } from '@stomp/stompjs';
import { Notification } from './common/emt-schema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private rxStompService: RxStompService) {}
  ngOnInit(): void {
    this.rxStompService
      .watch('/topic/progress')
      .subscribe((message: Message) => {
        const notification: Notification = JSON.parse(
          message.body
        ) as Notification;
        // this.toastr.info(notification.message,notification.title);
      });
  }
}
