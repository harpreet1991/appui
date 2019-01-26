import { Component } from '@angular/core';
import {AppDataService } from './services/app-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public appService : AppDataService){

    this.appService.getdata().subscribe(data =>{
     this.appService.notify.next(data);
    })
  }

  title = 'IT WORLD';
}
