import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from 'src/app/employees/employees.component';
import { EmployeeDetailComponent } from 'src/app/employee-detail/employee-detail.component';
import { AddComponent } from '../app/add/add.component';
import { HomeComponent } from '../app/home/home.component';
import { EditComponent } from '../app/edit/edit.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {
    path: 'employees', component: EmployeesComponent
  },
  /*{ path: 'employees/:id', component: EmployeeDetailComponent },*/
  { path: 'addemployee', component: AddComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
  {
    path: 'employees/edit/:id',
    component: EditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
