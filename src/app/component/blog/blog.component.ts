import { Component, OnInit } from '@angular/core';
import {MY_APP_CONTENT} from '../../constants/app-constant';
import {AppDataService } from '../../services/app-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public authoredData ;
  constructor(public appService : AppDataService) { }

  ngOnInit() {

    this.appService.notify.subscribe((data: any)=>{
      this.authoredData = data.blog;

    })
  }

}
