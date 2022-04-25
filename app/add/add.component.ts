import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.createEmployeeForm();
  }

  ngOnInit(): void {
  }
  createEmployeeForm() {
    this.employeeForm = this.fb.group({
      id: [null, Validators.required],
      username: ['', Validators.required],
      name: ['',[Validators.required, Validators.min(10), Validators.max(999)],
      ],
      email: ['', Validators.required],
      designation: ['', Validators.required],
      category: [null, Validators.required],
      phonenumber: ['', Validators.required,],
      completeaddress: ['', Validators.required],
    });
  }
  handleSubmit(event: MouseEvent) {
    this.employeeForm.reset();
    window.alert("Employee added successfully");
    event.preventDefault();
    if (this.employeeForm.invalid) {
      return;
    }
    this.employeeService
      .addEmployee({ ...this.employeeForm.value })
      .subscribe((data) => {
        this.employeeForm.reset();
      });
  }

}
