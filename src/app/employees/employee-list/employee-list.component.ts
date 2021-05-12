import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;
  loadedFeature = 'new';
  @ViewChild('listItemElem') listItemRef: ElementRef;
  @Input() employee: Employee;
  @Output() employeeSelected = new EventEmitter();
  @Output() employeeDeleted = new EventEmitter();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    //Get all employees
    this.employees = this.employeeService.getEmployees();
  }

  //Add new employee to the array
  onEmployeeAdded(employee: Employee) {
    this.employees.push(employee);
  }

  //Load the edit mode on click an employee
  onSelected(employee: Employee, event: any) {
    this.loadedFeature = 'update';
    this.selectedEmployee = employee;
    this.employeeSelected.emit(this.selectedEmployee);
    var listElements = document.querySelectorAll('.list-group-item');
    listElements.forEach((ele) => {
      ele.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
  }

  //Delete an employee on click delete button
  onDeleted(employee: Employee, event: any) {
    this.loadedFeature = 'new';
    var index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }

  //Method to load the add view
  onAddEmployee() {
    this.loadedFeature = 'new';
    var listElements = document.querySelectorAll('.list-group-item');
    listElements.forEach((ele) => {
      ele.classList.remove('selected');
    });
  }
}
