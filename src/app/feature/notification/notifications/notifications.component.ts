import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common/service/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  constructor(private notificationService: NotificationService) {}
  ngOnInit(): void {
    this.notificationService.notifications().subscribe({
      next: (data: Notification[]) => (this.notifications = data),
    });
  }
}
