import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomePageComponent } from './home-page/home-page.component';





@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    EmployeeDataComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    HomePageComponent,

    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'employees/:employeeId', component: EmployeeDetailsComponent,
      },
      {
        path: 'addNew',component:AddEmployeeComponent,
      },
      {
        path: '', component:HomePageComponent,
      },
      {
        path: 'empList',component:EmployeeDataComponent,
      },
      {
        path: ':id', component: EmployeeDetailsComponent,
      },
      {
        path:'',pathMatch:"full",component:AppComponent,
      },

    ]),
   
  
  ],
  providers: [EmployeeDataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
