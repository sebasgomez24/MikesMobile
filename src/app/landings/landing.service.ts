import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// const seolocations = 'static/ang/assets/json/seolocations.json'
// const adwordsLandingPages = 'static/ang/assets/json/adwordslps.json'
const seolocations = 'assets/json/og_seolocations.json'
const adwordsLandingPages = 'assets/json/og_adwordslps.json'

@Injectable()
export class LandingService {

  constructor(private http:HttpClient) { }

  listLocations():Observable<any>{
		return this.http.get(seolocations).catch(this.handleError)
  }

  listAdwordsLPs():Observable<any>{
    return this.http.get(adwordsLandingPages).catch(this.handleError)
  }

  // search(query){
  //   return this.http.get(endpoint).map(response=>{
  //     let data = []
  //     let req = response.json().filter(item=>{
  //       if(item.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ){
  //         data.push(item)
  //       }
  //     })
  //     return data
  //   }).catch(this.handleError)
  // }

  private handleError(error:any, caught:any):any{
    console.log(error, caught)
  }

}
