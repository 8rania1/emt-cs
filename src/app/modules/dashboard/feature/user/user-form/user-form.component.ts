import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms';
import { Permission } from 'src/app/common/emt-schema';
import { PermissionService } from 'src/app/common/service/permission.service';
import { UserService } from 'src/app/common/service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {

  permissions: Permission[] = [];
  user: FormGroup;
  constructor(private builder: FormBuilder, private userService: UserService, private permissionService: PermissionService) {
    this.user = this.builder.group({ firstName: null, lastName: null, email: [null, Validators.required], mobile: null, 
      permissions:this.builder.array([])});
  }

  ngOnInit(): void {
    this.permissionService.permissions().subscribe({
      next: (data: Permission[]) => this.permissions = data
    });
  }

  onChange(permission: string): void {
    let selected_permissions:string[] = this.user.controls['permissions'].value as string[];
    if (selected_permissions.includes(permission)) {
      selected_permissions = selected_permissions.filter((item) => item !== permission);
    } else {
      selected_permissions.push(permission);
    }
  }

  submit() {
    this.userService.save(this.user.value).subscribe({
      next: () => this.user.reset()
    }
    )
  }
}
