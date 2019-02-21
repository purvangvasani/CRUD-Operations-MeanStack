import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatDialogModule,
  MatIconModule,
  MatDatepickerModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, 
  MatNativeDateModule} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    data: { title: 'Employee List' }
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetailComponent,
    data: { title: 'Employee Details' }
  },
  {
    path: 'employee-create',
    component: EmployeeCreateComponent,
    data: { title: 'Create Employee' }
  },
  {
    path: 'employee-edit/:id',
    component: EmployeeEditComponent,
    data: { title: 'Edit Employee' }
  },
  { path: '',
    redirectTo: '/employee',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
