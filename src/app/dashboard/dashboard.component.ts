import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  token = null;
  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("currentUser") == null) {
      this.router.navigate(['']);
    }
    this.token = localStorage.getItem("currentUser");
  }

  logout() {
    localStorage.clear();
    
  }

}
