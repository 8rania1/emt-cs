import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RxStompService } from 'src/app/common/stomp/rx-stomp.service';
import { Message } from '@stomp/stompjs';
import { NotificationService } from 'src/app/common/service/notification.service';
import { Notification } from 'src/app/common/emt-schema';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  notifications: Notification[] = [];
  count: number = 0;
  isMenuCollapsed = true;
  constructor(
    private rxStompService: RxStompService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.notificationService.notifications().subscribe({
      next: (data: Notification[]) => {
        this.notifications = data;
        this.count = this.notifications.filter(
          (item) => item.read === false
        ).length;
      },
    });
    this.rxStompService
      .watch('/topic/progress')
      .subscribe((message: Message) => {
        const notification: Notification = JSON.parse(
          message.body
        ) as Notification;
        this.notifications.push(notification);
        this.count++;
      });
  }

  readen(notification: Notification) {
    this.count--;
  }
}
