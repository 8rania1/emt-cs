import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { Alert, Notification } from 'src/app/common/emt-schema'
import { NotificationService } from 'src/app/common/service/notification.service'
import { RxStompService } from 'src/app/common/stomp/rx-stomp.service'
import { Message } from '@stomp/stompjs'
import { AlertService } from 'src/app/common/service/alert.service'

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
})
export class AlertsComponent implements OnInit {
  count: number = 0
  alerts: Alert[] = []
  constructor(private alertService: AlertService, private rxStompService: RxStompService) {}

  ngOnInit(): void {
    this.alertService.collection().subscribe({
      next: (data: Alert[]) => {
        this.alerts = data
        this.count = this.alerts.length
      },
    })
    this.rxStompService.watch('/topic/alert').subscribe((message: Message) => {
      const alert: Alert = JSON.parse(message.body) as Alert
      this.alerts.push(alert)
      this.count++
    })
  }
}
