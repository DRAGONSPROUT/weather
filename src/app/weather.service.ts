import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpx : HttpClient) {}

  url = "http://api.weatherapi.com/v1/forecast.json?q="
  

  check(loc : string) : Observable<any>
  {
    const header = new HttpHeaders({
      'key' : '017fd40939824416a4725601241312'
    })

    return this.httpx.post(this.url+loc,loc,{headers : header});
  }


}
