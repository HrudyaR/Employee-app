import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
