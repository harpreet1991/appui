import { Component, OnInit } from '@angular/core';
import {MY_APP_CONTENT} from '../../constants/app-constant';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public authoredData = MY_APP_CONTENT.blog;
  constructor() { }

  ngOnInit() {
  }

}
