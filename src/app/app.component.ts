import { Component, NgModule } from '@angular/core';
import { WeatherService } from './weather.service';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { error } from 'console';
import { GreetingService } from './greeting.service';
import { MaterialModule } from './material.module';

@Component({
  selector: 'app-root',
  imports : [FormsModule, CommonModule, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'weather';

  loc : string ="";
  Greeting : string = "";
  data : any;
  error : any;
  errorfound : boolean = false;

  constructor (private ws : WeatherService, private gs : GreetingService){}

  ngOnInit (){
    this.Greeting = this.gs.getGreeting();
  }

  search()
  {
    this.ws.check(this.loc).subscribe(e=>
    {
      console.log(e);
      this.errorfound = false;
      this.data = e;
    },
    error =>
    {
      this.errorfound = true;
      this.error = error.error.error.message;
    }
    );
  }
}
