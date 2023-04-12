import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(private http: HttpClient) {}
  submit(user: NgForm) {
    console.log(user.value);
    this.http
      .post('http://localhost:8080/user/addUser', user.value)
      .subscribe(() => console.log('success'));
  }
}
