import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor() { }

  getGreeting() : string{
    const currHour = new Date().getHours();

    if(currHour < 12)
      return "Good Morning!!";
    else if(currHour <16)
      return "Good Afternoon!!";
    else
    return "Good Evening!!";
  }
}
