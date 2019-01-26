import { Component, OnInit } from '@angular/core';
import {MY_APP_CONTENT} from '../../constants/app-constant'

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
public authoredData = MY_APP_CONTENT.homeCompoent;
  constructor() { }

  ngOnInit() {
    
  }

}
