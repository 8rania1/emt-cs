import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RxStompService } from 'src/app/common/stomp/rx-stomp.service';
import { Message } from '@stomp/stompjs';
import { NotificationService } from 'src/app/common/service/notification.service';
import { Notification, User } from 'src/app/common/emt-schema';
import { UserSessionService } from 'src/app/common/service/user-session.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  user: User | null;
  notifications: Notification[] = [];
  count: number = 0;
  @Output() collapse = new EventEmitter();

  constructor(private rxStompService: RxStompService, private notificationService: NotificationService
    , private session: UserSessionService) {
    this.user = session.user();
  }

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

  logout() {
    this.session.logout();
  }

  collapseClick() {
    this.collapse.emit();
  }



}
