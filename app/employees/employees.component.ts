import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Temployee, TEmployee } from '../types/employee.type';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Temployee[];
  emps: TEmployee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    const observable = this.employeeService.fetchAll();   
    observable.subscribe((data) => {
      this.employees = data;
    });
  }
  handleEmployeeDelete(id: number) {
    console.log(this.employees);
    this.employeeService.removeEmployee(id).subscribe((data) => {
      this.employees = Object.values(this.employees).filter(employee => employee.id !== data.id);
    });
  }

}
