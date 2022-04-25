import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId: number;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {
    this.createEmployeeForm();
  }
  createEmployeeForm() {
    this.employeeForm = this.fb.group({
      id: [null, Validators.required],
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      designation: ['', Validators.required],
      category: [null, Validators.required],
      phonenumber: ['', Validators.required,],
      completeaddress: ['', Validators.required],
    });
    this.employeeForm.get('email').valueChanges.subscribe((value) => { });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.employeeId = params.id;
      this.employeeService
        .getEmployeeDetailById(+this.employeeId)
        .subscribe((data) => {
          this.employeeForm.controls['id'].patchValue(data.id);
          this.employeeForm.controls['username'].patchValue(data.username);
          this.employeeForm.controls['name'].patchValue(data.name);
          this.employeeForm.controls['email'].patchValue(data.email);
          this.employeeForm.controls['designation'].patchValue(data.designation);
          this.employeeForm.controls['gender'].patchValue(data.gender);
          this.employeeForm.controls['phonenumber'].patchValue(data.phone_number);
          this.employeeForm.controls['completeaddress'].patchValue(data.complete_address);
        });
    });
  }
  handleSubmit(event: MouseEvent) {
    event.preventDefault();
    if (this.employeeForm.invalid) {
      console.log('Invalid username value');
      return;
    }
    this.employeeService
      .editemployee(this.employeeId, { ...this.employeeForm.value })
      .subscribe((data) => {
        console.log(data);
        window.alert("Employee details successfully edited");
        this.employeeForm.reset();
        this.router.navigateByUrl('/employees');
      });
  }

}
