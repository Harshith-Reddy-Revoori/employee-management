import { Component } from '@angular/core';
import { EmployeeDataService } from './employee-data.service';
import { TEmployeeData } from './employee.type';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Data';
  employees:any;
  newArray:TEmployeeData[];
  content:any;
constructor(private employeeService:EmployeeDataService){
  this.employeeService.getEmployeesData().subscribe((content)=>{
    this.employees =content;
    this.newArray=this.employees.data;
  });
}
  

searchThis(data) {
    this.content = this.newArray;
    console.log("Data is= ",data);
    if (data) {
      this.content = this.content.filter(function (ele, i, array) {
        let arrayelement = ele.name.toLowerCase();
        return arrayelement.includes(data);
      })
    }
    else {
      console.log(this.content);
    }
    console.log("Content is",this.content);
    console.log("Array Data is",this.newArray);
  }
}
