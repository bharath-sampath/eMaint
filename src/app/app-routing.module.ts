import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component'
import {LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component'
import {AuthGateServiceService} from './auth-gate-service.service'

const routes: Routes = [
  {
  path: 'employees/:id',
component: EmployeesComponent,
},
{ path: 'home',
component: HomeComponent,
canActivate: [AuthGateServiceService]
},

{
  path: 'employees',
component: EmployeesComponent
,
canActivate: [AuthGateServiceService],

},

{ path: 'login',
component: LoginComponent
},


{
    path: '**',
  redirectTo: 'login'

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
