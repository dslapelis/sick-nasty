import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IndexComponent } from '../index/index.component';
import { ServicesComponent } from '../services/services.component';


const routes: Routes = [
  {
      path: '',
      component: IndexComponent,
  },
  {
      path: 'login',
      component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: '**',
    component: IndexComponent,
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
