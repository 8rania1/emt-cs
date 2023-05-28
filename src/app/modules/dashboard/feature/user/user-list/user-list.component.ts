import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/common/emt-schema'
import { Page } from 'src/app/common/model/page'
import { UserService } from 'src/app/common/service/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  user!: User
  users: User[] = []
  recipient: User | null = null
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.users().subscribe((data: User[]) => (this.users = data))
  }

  select(user: User) {
    this.user = user
  }

  edit(user: User) {
    const filter: User[] = this.users.filter((item) => item.id === user.id)
    if (filter.length > 0) {
      filter.forEach((item) => {
        item.firstName = user.firstName
        item.lastName = user.lastName
        item.email = user.email
        item.mobile = user.mobile
        item.permissions = user.permissions
      })
    } else {
      this.users.push(user)
    }
  }
}
