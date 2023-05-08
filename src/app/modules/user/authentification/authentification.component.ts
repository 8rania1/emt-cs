import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSessionService } from 'src/app/common/service/user-session.service';

@Component({
  selector: 'app-authentification',
  templateUrl: 'authentification.component.html',
  styleUrls:['authentification.component.scss']
})
export class AuthentificationComponent {

  constructor(private session: UserSessionService) { }
  submit(user: NgForm) {
    this.session.auth(user.value);
  }
}
