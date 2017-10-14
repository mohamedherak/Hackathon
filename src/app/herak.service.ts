import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {incedent} from './incedent'


@Injectable()
export class AmedService {

  constructor(private http: Http) { }
  amed(i:number,j:number):number{return i*j;}
  add(i:number,j:number):number{return i+j;}
  getincident():Promise<Array<incedent>>{
	  return this.http.get("assets/data.json")
	  .toPromise()
	  .then((response)=>{
		  console.log(response.json());
		  return response.json() as incedent[];
	  }
		  )
  }

}
