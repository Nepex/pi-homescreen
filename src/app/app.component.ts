import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currTime = moment().format('hh:mm');

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      console.log(this.currTime);
      this.currTime = moment().format('hh:mm');

      this.ngOnInit();
    }, 1000);
  }
}
