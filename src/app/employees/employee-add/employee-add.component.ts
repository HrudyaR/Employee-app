import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Position } from '../../shared/position.model';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  positions: Position[];
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('positionInput') positionInputRef: ElementRef;
  @ViewChild('addressInput') addressInputRef: ElementRef;
  @ViewChild('phoneInput') phoneInputRef: ElementRef;

  //Emit event to add the employee details
  @Output() employeeAdded = new EventEmitter();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    //Get all positions
    this.positions = this.employeeService.getPositions();
  }

  //Method to add new employee to the list
  onAddItem() {
    const empName = this.nameInputRef.nativeElement.value;
    const empPosition = this.positionInputRef.nativeElement.value;
    const empAddress = this.addressInputRef.nativeElement.value;
    const empPhone = this.phoneInputRef.nativeElement.value;
    const newEmployee = new Employee(
      empName,
      empAddress,
      empPhone,
      empPosition
    );
    this.employeeAdded.emit(newEmployee);
    this.nameInputRef.nativeElement.value = '';
    this.positionInputRef.nativeElement.value = '';
    this.addressInputRef.nativeElement.value = '';
    this.phoneInputRef.nativeElement.value = '';
  }
}
