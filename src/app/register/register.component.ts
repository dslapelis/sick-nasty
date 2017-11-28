import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { print } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  success: boolean;
  notRegistered: boolean;

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = 'login'
    this.success = false;
    this.notRegistered = true;
  }

  register() {
    console.log(this.model.name);
    this.authenticationService.register(this.model.name, this.model.email, this.model.password)
      .subscribe(data => {
        this.success = true;
        this.notRegistered = true;
      },
      error => {this.notRegistered = false; this.success = false;});
  }

}
