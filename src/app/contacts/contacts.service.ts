import { Injectable } from "@angular/core";
import { Contact } from "./contact.model";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ContactsService {

  private contacts: Contact[];
  url = 'http://localhost:3000';

  constructor(private http: HttpClient){}

  addContact(contacts: Contact) {
    return this.http.post(this.url + '/contacts', {name: contacts.name, email: contacts.email, number: contacts.number});
  }

  getContacts() {
    return this.http.get(this.url + '/contacts');
  }

  getContactById(id: number){
    return this.http.get(this.url + '/contacts/' + id);
  }

  updateContactById(id: number, updatedContact: Contact) {
    return this.http.put(this.url + '/contacts/' + id, updatedContact);
  }

  deleteContactById(id: number) {
    return this.http.delete(this.url + '/contacts/' + id);
  }
}
