import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent  {
 constructor(private http:HttpClient){}
  
  title = 'emt-cs';
  registerUser(user: NgForm) {
    console.log(user.value)
    this.http.post("http://localhost:8080/user/addUser",user.value).subscribe(()=>console.log("success"))
  }
 
}
