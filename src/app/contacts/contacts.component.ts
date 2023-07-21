import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsService } from './contacts.service';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { Contact } from './contact.model';
import { ContactFormComponent } from './contact-form/contact-form/contact-form.component';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsComponent implements OnInit{

  @ViewChild(ContactFormComponent) frm!: ContactFormComponent;
  myContacts: Contact[] = [];
  currentContactSelected : Contact;
  viewSelectedContact: Contact;
  newContactDetails: Contact;
  currentAction: string = '';
  editModeChanged: boolean = false;

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute){};

  ngOnInit(): void {
    // this.onAddContact('Mark', 'mark@gmail.com', '0938273112122');
    this.onFetchContacts();
    // this.onFetchContactById(1);
    // this.onUpdateContactById(1, { "name": "Tim", "email": "tim@gmail.com", "number": "0938273112121" });
    // this.onDeleteContact(2);
  }

  onAddContact(contact: Contact){
    this.contactsService.addContact(contact).subscribe(
      (response: Contact[]) => {
        // this.myContacts = response;
      },
      (error) => {
        console.log(error);
      });
  }

  onFetchContacts(){
    this.contactsService.getContacts().subscribe(
      (response: Contact[]) => {
        this.myContacts = response;
      },
      (error) => {
        console.log(error);
      });

  }

  onFetchContactById(id: number) {
    this.contactsService.getContactById(id).subscribe(
      (response: Contact) => {
        this.viewSelectedContact = response;
        // this.router.navigate([id], {relativeTo: this.route});
      },
      (error) => {
        console.log(error);
      });
  }

  onUpdateContactById(id: number, updatedContact: Contact) {
    this.contactsService.updateContactById(id, updatedContact).subscribe(
      (response: Contact) => {
        // console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }

  onDeleteContact(id: number){
    this.contactsService.deleteContactById(id).subscribe(
      (response: Contact[]) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }

  onDoActionSelected($event) {
    switch ($event.action) {
      case 'VIEW':
        this.onFetchContactById($event.contact.id);
        this.editModeChanged = false;
      break;

      case 'UPDATE':
        this.frm.contactForm.get('id')?.setValue($event.contact.id);
        this.frm.contactForm.get('name')?.setValue($event.contact.name);
        this.frm.contactForm.get('email')?.setValue($event.contact.email);
        this.frm.contactForm.get('number')?.setValue($event.contact.number);
        this.editModeChanged = true;
      break;

      case 'DELETE':
        this.onDeleteContact($event.contact.id);
        this.onFetchContacts();
        this.editModeChanged = false;
      break;
    }
  }

  onAddNewContact(contact: Contact){
    this.onAddContact(contact);
    this.onFetchContacts();
    this.editModeChanged = false;
  }

  onUpdateContact(contact: Contact){
    this.onUpdateContactById(contact.id, contact);
    this.onFetchContacts();
    this.editModeChanged = false;
  }

}
