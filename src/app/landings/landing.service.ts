import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const seolocations = 'static/ang/assets/json/seolocations.json'
const adwordsLandingPages = 'static/ang/assets/json/adwordslps.json'

@Injectable()
export class LandingService {

  constructor(private http:Http) { }

  listLocations(){
		return this.http.get(seolocations).map(response=>response.json()).catch(this.handleError)
  }

  listAdwordsLPs(){
    return this.http.get(adwordsLandingPages).map(response=>response.json()).catch(this.handleError)
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
