import { Component } from '@angular/core';
import { FirebaseService, datas_returned } from './services/firebase.service';

import { DataService } from './services/data.service';
// INTERFACES #########################
import { db_update } from './interfaces/firebase';
import { __values } from 'tslib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-titanic';
  clicked = false;
  DB_update: db_update = {
    pushed: [{}],
    not_pushed: [{}],
    error:''
  };

  constructor(private fS: FirebaseService, private dS: DataService){

    // fS.pushDataToFB();
    // this.dS.pureData();
  }

  callPushData(){
    this.fS.pushDataToFB();

  }
  callDbUpdate(){
    console.log(not_pushed_test);
    console.log(pushed_test);



  }

}
