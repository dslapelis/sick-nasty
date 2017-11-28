import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  isIncomplete: boolean;
  model: any = {};

  constructor() { }

  ngOnInit() {
    this.isSuccess = false;
    this.isFailure = false;
    this.isIncomplete = false;
    if(localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

}
