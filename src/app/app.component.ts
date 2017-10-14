import { Component } from '@angular/core';
import { ListeIncédentsService } from './liste-incédents.service';
import { AmedService } from './herak.service'
import {incedent} from './incedent'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	listincedents:incedent[] ;
  constructor(
  private liste_incédents:ListeIncédentsService,
  private herak:AmedService
  ) { 
	this.getList();  }
  get_list():string{return this.liste_incédents.get_list()}	
  
  moh(i:number,j:number):number{return this.herak.amed(i,j)}
  addition(i:number,j:number):number{return this.herak.add(i,j)}
  getList():void{
		 this.herak.getincident().then((response)=>
		{
			this.listincedents = response as incedent[];
			console.log("list on component",this.listincedents);
		});
		
	}
  
  }
