import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  notIncorrect: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = 'dashboard';
    this.notIncorrect = true;   
  }

  login() {
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {this.notIncorrect = false;});
  }

}
