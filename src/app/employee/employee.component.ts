import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';

import { ApiService } from '../api.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  employees: any;
  displayedColumns = ['emp_ID', 'emp_Name', 'emp_Position'];
  dataSource = new EmployeeDataSource(this.api);

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api.getEmployees().subscribe(res => {
      console.log(res);
      this.employees = res;
    }, err => {
      console.log(err);
    });
  }

  deleteEmployee(id) {
    this.api.deleteEmployee(id)
      .subscribe(res => {
          this.router.navigate(['/employee']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
export class EmployeeDataSource extends DataSource<any>{
  
  constructor(private api: ApiService){
    super()
  }

  connect(){
    return this.api.getEmployees();
  }
  disconnect(){

  }
}