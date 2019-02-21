import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee ={};

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getEmployeeDetails(this.route.snapshot.params['id']);
  }

  getEmployeeDetails(id) {
    this.api.getEmployee(id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
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
