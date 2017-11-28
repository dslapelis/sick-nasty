import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLoggedIn: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  isIncomplete: boolean;
  model: any = {};

  constructor() { 
    
  }

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
