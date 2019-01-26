import { Component, OnInit } from '@angular/core';
import {MY_APP_CONTENT} from '../../constants/app-constant';
@Component({
  selector: 'app-jumborton',
  templateUrl: './jumborton.component.html',
  styleUrls: ['./jumborton.component.css']
})
export class JumbortonComponent implements OnInit {
  public authoredData = MY_APP_CONTENT.jumborton;
  constructor() { }

  ngOnInit() {
  }

}
