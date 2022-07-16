import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-private',
  templateUrl: './home-private.component.html',
  styleUrls: ['./home-private.component.scss']
})
export class HomePrivateComponent implements OnInit {
  user: any = {
    open: false
  }
  constructor() { }

  ngOnInit(): void {
  }
  userView(){
    if(this.user.open === false){
      this.user.open = true
    } else {
      this.user.open = false
    }
  }
}
