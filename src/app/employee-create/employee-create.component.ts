import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})

export class EmployeeCreateComponent implements OnInit {
  
  employeeForm: FormGroup;
  emp_ID:string='';
  emp_Name:string='';
  emp_Age:string='';
  emp_Gender:string='';
  emp_Position:string='';
  emp_JoinDate:string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder, private mdp: MatDatepickerModule) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      'emp_ID' : [null, Validators.required],
      'emp_Name' : [null, Validators.required],
      'emp_Age' : [null, Validators.required],
      'emp_Gender' : [null, Validators.required],
      'emp_Position' : [null, Validators.required],
      'emp_JoinDate' : [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm){
    this.api.postEmployee(form).subscribe(res => {
      let id = res['id'];
      this.router.navigate(['/employee-details', id]); 
    }, (err) => {
      console.log(err);
    });
    this.router.navigate(['/employee']);
  }

}
