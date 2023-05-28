import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { Chat, User } from 'src/app/common/emt-schema'
import { UserSessionService } from 'src/app/common/service/user-session.service'
import { RxStompService } from 'src/app/common/stomp/rx-stomp.service'
import { Message } from '@stomp/stompjs'
import { ChatService } from 'src/app/common/service/chat.service'
import { UserService } from 'src/app/common/service/user.service'

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit {
  active: boolean = false
  users: User[] = []
  user: User | null

  recipient: User | null = null
  message!: string
  chats: Chat[] = []

  constructor(private rxStompService: RxStompService, private userSessionService: UserSessionService, private chatService: ChatService, private userService: UserService) {
    this.user = this.userSessionService.user()
  }

  ngOnInit(): void {
    this.rxStompService.watch('/topic/chat/' + this.user?.id).subscribe((message: Message) => {
      const chat: Chat = JSON.parse(message.body) as Chat
      this.chats.push(chat)
    })
    this.userService.users().subscribe({
      next: (data: User[]) => (this.users = data),
    })
  }

  ngAfterViewInit(): void {}

  send() {
    if (this.user && this.recipient) {
      const chat: Chat = { user: this.user, message: this.message, date: null }
      this.chatService.send(chat, this.recipient.id).subscribe({
        next: (data: Chat) => this.chats.push(data),
      })
    }
  }

  chatbox() {
    this.active = !this.active
  }

  select(user: User) {
    this.recipient = user
  }
}
