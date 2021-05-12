export class Employee {
  public name: string;
  public address: string;
  public phone: string;
  public position: string;

  constructor(name: string, add: string, phone: string, position: string) {
    this.name = name;
    this.address = add;
    this.phone = phone;
    this.position = position;
  }
}
