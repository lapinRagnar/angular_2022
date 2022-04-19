import { EmpaddComponent } from './empadd/empadd.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistingComponent } from './emplisting/emplisting.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'employee', component: EmployeeComponent, children: [
    {path: '', component: EmplistingComponent},
    {path: 'create', component: EmpaddComponent},
    {path: 'edit/:id', component: EmpaddComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
