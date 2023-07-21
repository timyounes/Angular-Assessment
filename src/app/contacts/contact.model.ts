export class Contact {

  public id: number;
  public name: string;
  public email: string;
  public number: string;

  constructor(id: number, name: string, email: string, number: string){
    this.id = id;
    this.name = name;
    this.email = email;
    this.number = number;
  }
}
