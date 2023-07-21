import { faEdit, faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  @Input() contacts: Contact[] = [];
  @Output() contactSelected = new EventEmitter<{contact: Contact, action: string}>();

  iconUpdate = faEdit;
  iconView = faEye;
  iconDelete = faTrashCan;

  ngOnInit(): void {

  }

  onViewContact(contact: Contact) {
    this.contactSelected.emit({contact: contact, action: 'VIEW'});
  }

  onUpdateContact(contact: Contact) {
    this.contactSelected.emit({contact: contact, action: 'UPDATE'});
  }

  onDeleteContact(contact: Contact) {
    this.contactSelected.emit({contact: contact, action: 'DELETE'});
  }
}
