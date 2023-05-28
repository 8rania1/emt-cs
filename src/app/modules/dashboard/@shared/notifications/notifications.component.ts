import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { Notification } from 'src/app/common/emt-schema'
import { NotificationService } from 'src/app/common/service/notification.service'
import { RxStompService } from 'src/app/common/stomp/rx-stomp.service'
import { Message } from '@stomp/stompjs'

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent implements OnInit {
  count: number = 0
  notifications: Notification[] = []
  constructor(private notificationService: NotificationService, private rxStompService: RxStompService) {}

  ngOnInit(): void {
    this.notificationService.notifications().subscribe({
      next: (data: Notification[]) => {
        this.notifications = data
        this.count = this.notifications.filter((item) => item.read === false).length
      },
    })
    this.rxStompService.watch('/topic/notification').subscribe((message: Message) => {
      const notification: Notification = JSON.parse(message.body) as Notification
      this.notifications.push(notification)
      this.count++
    })
  }
}
