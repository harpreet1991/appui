import { Component, OnInit } from '@angular/core';
import {MY_APP_CONTENT} from '../../constants/app-constant'
import {AppDataService } from '../../services/app-data.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
public authoredData;// = MY_APP_CONTENT.homeCompoent;
  constructor(public appService : AppDataService) { }

  ngOnInit() {

    this.appService.notify.subscribe((data: any)=>{
      this.authoredData = data.homeCompoent;

    })
  }

}
