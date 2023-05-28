import { HttpClient } from '@angular/common/http'
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'
import { FormBuilder, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms'
import { Permission, User } from 'src/app/common/emt-schema'
import { PermissionService } from 'src/app/common/service/permission.service'
import { UserService } from 'src/app/common/service/user.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input()
  user: User | undefined
  permissions: Permission[] = []
  form: FormGroup
  @Output()
  processed: EventEmitter<User> = new EventEmitter<User>()

  constructor(private builder: FormBuilder, private userService: UserService, private permissionService: PermissionService) {
    this.form = this.builder.group({ firstName: null, lastName: null, email: [null, Validators.required], mobile: null, permissions: this.builder.array([]) })
  }

  ngOnInit(): void {
    this.permissionService.permissions().subscribe({
      next: (data: Permission[]) => (this.permissions = data),
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.user) {
      this.form = this.builder.group({ id: this.user.id, firstName: this.user.firstName, lastName: this.user.lastName,
         email: [this.user.email, Validators.required], mobile: this.user.mobile, permissions: this.builder.array(this.user.permissions) })
    }
  }

  onChange(permission: string): void {
    let selected_permissions: string[] = this.form.controls['permissions'].value as string[]
    if (selected_permissions.includes(permission)) {
      selected_permissions = selected_permissions.filter((item) => item !== permission)
    } else {
      selected_permissions.push(permission)
    }
  }

  submit() {
    this.userService.save(this.form.value).subscribe({
      next: (data: User) => {
        this.form.reset()
        this.processed.emit(data)
      },
    })
  }
}
