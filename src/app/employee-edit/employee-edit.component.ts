import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employeeForm: FormGroup;
  id:string='';
  emp_ID:string = '';
  emp_Name:string = '';
  emp_Age:string = '';
  emp_Gender:string = '';
  emp_Position:string = '';
  emp_JoinDate:string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getEmployee(this.route.snapshot.params['id']);
    this.employeeForm = this.formBuilder.group({
      'emp_ID' : [null, Validators.required],
      'emp_Name' : [null, Validators.required],
      'emp_Age' : [null, Validators.required],
      'emp_Gender' : [null, Validators.required],
      'emp_Position' : [null, Validators.required],
      'emp_JoinDate' : [null, Validators.required]
    });
  }

  getEmployee(id) {
    this.api.getEmployee(id).subscribe(data => {
      this.id = data._id;
      this.employeeForm.setValue({
        emp_ID: data.emp_ID,
        emp_Name: data.emp_Name,
        emp_Age: data.emp_Age,
        emp_Gender: data.emp_Gender,
        emp_Position: data.emp_Position,
        emp_JoinDate: data.emp_JoinDate
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateEmployee(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/employee-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  employeeDetails(){
    this.router.navigate(['/employee-details', this.id]);
  }
}
