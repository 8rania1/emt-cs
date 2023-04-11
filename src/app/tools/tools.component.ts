import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Country {
	ref_tool: string;
	name_tool: string;
	qte_stock: number;
	
}



@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
	Tools:any[]=[];
	constructor(private http:HttpClient){}
	ngOnInit(): void {
		this.http.get<any[]>("http://localhost:8080/tools/getAll").subscribe(data=>this.Tools=data)
	}

}
