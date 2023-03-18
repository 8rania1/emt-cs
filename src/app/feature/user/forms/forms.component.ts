import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
})
export class FormsComponent {
  constructor(private http: HttpClient) {}
  submit(user: NgForm) {
    console.log(user.value);
    this.http
      .post('http://localhost:8080/user/addUser', user.value)
      .subscribe(() => console.log('success'));
  }
}
