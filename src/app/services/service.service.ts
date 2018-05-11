import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from  'rxjs/observable/of';
import { catchError, map, tap } from  'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

// const endpoint = 'static/ang/assets/json/services.json'
const endpoint = 'assets/json/og_services.json'

@Injectable()
export class ServicesService {

  private baseURL = 'http://127.0.0.1:8000/'

  constructor(private httpClient:HttpClient, private http:Http) { }

  list():Observable<any>{
		return this.httpClient.get(endpoint)
	}

  create(name:string, city:string, phone:string, email:string, message:string, option:string): Observable<any>{
    let apiSendMessageEndpoint = `${this.baseURL}send-message/`
    let data = {
      'name':name,
      'city':city,
      'phone':phone,
      'email':email,
      'message':message
    }
    return this.httpClient.post(apiSendMessageEndpoint, data)
  }

  // get(slug):Observable<any>{
	//   return this.http.get(endpoint).map(response=>{
	// 	  let data = response.json().filter(item=>{
	// 	  	if (item.slug == slug){
	// 		  	return item
	// 	  	}
	// 		})
	// 		if (data.length == 1){
	// 	  	return data[0]
	//   	}
	//   	return {}
	// 	}).catch(this.handleError)
  // }

  search(query){
	  return this.http.get(endpoint).map(response=>{
		let data = []
		let req = response.json().filter(item=>{
			if (item.title.toLowerCase().indexOf(query.toLowerCase()) >= 0){
				data.push(item)
			}
		})
		return data
	  })
  }

  private handleError(error:any, caught:any):any{
	  console.log(error, caught)
  }
}
