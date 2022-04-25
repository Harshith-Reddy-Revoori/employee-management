import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Temployee } from '../types/employee.type';
import { EmployeeService } from '../employee.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId: number;
  @Input() public employee: Temployee;
  @Input() public isDetailView: boolean;
  @Output() public employeeDelete: EventEmitter<number> = new EventEmitter();
  @Output() public employeeAdd: EventEmitter<Temployee> = new EventEmitter();

  employees: Temployee[];
  constructor(private fb: FormBuilder, private router: Router, private employeeService: EmployeeService) {
   }

  ngOnInit(): void { }

  handleDelete() {
    delete this.employee;
    /*this.employeeDelete.emit(this.employee.id);*/
    //this.employeeService.removeEmployee(this.employee.id).subscribe((data) => {
    //  this.employees = this.employees.filter((employee) => employee.id !== data.id);
    //});
  }

  handleAdd() {
    this.employeeAdd.emit(this.employee);
  }

  showDetails() {
    this.router.navigateByUrl(`/employees/${this.employee.id}`, {});

  }
}
