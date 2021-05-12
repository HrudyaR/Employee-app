import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Employee } from '../employee.model';
import { Position } from '../../shared/position.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  positions: Position[];
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('positionInput') positionInputRef: ElementRef;
  @ViewChild('addressInput') addressInputRef: ElementRef;
  @ViewChild('phoneInput') phoneInputRef: ElementRef;

  constructor(private employeeService: EmployeeService) {}

  //Emit event to update the details
  @Output() employeeUpdate = new EventEmitter();

  //Get the selected employee to display the details
  @Input() selectedEmployee: Employee;

  ngOnInit(): void {
    //Load all positions to the dropdown
    this.positions = this.employeeService.getPositions();
  }

  //Method to save the updated info
  onUpdateItem() {
    const empName = this.nameInputRef.nativeElement.value;
    const empPosition = this.positionInputRef.nativeElement.value;
    const empAddress = this.addressInputRef.nativeElement.value;
    const empPhone = this.phoneInputRef.nativeElement.value;
    this.selectedEmployee.name = empName;
    this.selectedEmployee.position = empPosition;
    this.selectedEmployee.address = empAddress;
    this.selectedEmployee.phone = empPhone;
  }
}
