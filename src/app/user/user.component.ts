import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface User {
	firstName: string;
	lastName: string;
	mail: number;
	mobile: number;
}



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit{
  users: any[]=[];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:8080/user/getAll").subscribe(data=>this.users=data)
    
    

    
  }
  
}
