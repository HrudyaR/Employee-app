import { Employee } from './employee.model';
import { Position } from '../shared/position.model';

export class EmployeeService {
  employees: Employee[] = [
    new Employee('John Indigo', 'Mississauga', '1234567895', 'Project Manager'),
    new Employee(
      'Matt McLey',
      'Brighton Road',
      '4567894525',
      'Technical Architect'
    ),
    new Employee('Debbie', 'River view', '1238965478', 'Team Lead'),
    new Employee('Jaimey', 'Toronto', '7895642158', 'Developer'),
  ];

  positions: Position[] = [
    new Position('Project Manager'),
    new Position('Developer'),
    new Position('Designer'),
    new Position('Team Lead'),
    new Position('Technical Architect'),
    new Position('Video Animator'),
  ];

  getEmployees() {
    return this.employees.slice();
  }

  getPositions() {
    return this.positions.slice();
  }
}
