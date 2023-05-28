import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { RxStompService } from 'src/app/common/stomp/rx-stomp.service'
import { Message } from '@stomp/stompjs'
import { NotificationService } from 'src/app/common/service/notification.service'
import { Alert, Notification, User } from 'src/app/common/emt-schema'
import { UserSessionService } from 'src/app/common/service/user-session.service'
import { AlertService } from 'src/app/common/service/alert.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  active:boolean | null = false
  user: User | null
  notifications: Notification[] = []
  alerts: Alert[] = []
  count: number = 0
  @Output() collapse = new EventEmitter()

  constructor(private rxStompService: RxStompService, private notificationService: NotificationService, private session: UserSessionService, private alertService: AlertService) {
    this.user = session.user()
  }

  ngOnInit(): void {

    this.alertService.collection().subscribe({
      next: (data: Alert[]) => (this.alerts = data),
    })



    this.rxStompService.watch('/topic/alert').subscribe((message: Message) => {
      const alert: Alert = JSON.parse(message.body) as Alert
      this.alerts.push(alert)
      this.count++
    })
  }

  readen(notification: Notification) {
    this.count--
  }

  logout() {
    this.session.logout()
  }

  collapseClick() {
    this.collapse.emit()
  }

  chatbox(){
    console.log(this.active);
    this.active = !this.active
  }
}
