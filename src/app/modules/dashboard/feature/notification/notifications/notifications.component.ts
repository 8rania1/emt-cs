import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, Notification } from 'src/app/common/emt-schema';
import { NotificationService } from 'src/app/common/service/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent {
  @Input()
  notifications: Notification[] = [];
  @Output()
  readen: EventEmitter<Notification> = new EventEmitter<Notification>();
  constructor(private notificationService: NotificationService) {}

  read(notification: Notification) {
    this.notificationService.read(notification).subscribe({
      next: () => {
        notification.read = true;
        this.readen.emit(notification);
      },
    });
  }
}
