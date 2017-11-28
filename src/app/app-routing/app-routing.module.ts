import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { LoginComponent } from 'app/login/login.component';
import { RegisterComponent } from 'app/register/register.component';

const routes: Routes = [
  {
      path: '',
      component: IndexComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: "**",
    component: IndexComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)    
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
