import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../contact.model';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  id: number;
  contactForm : FormGroup;
  @Input() selectedContact: Contact;
  @Input() editMode: boolean = false;
  @Output() newContactDataEvent = new EventEmitter<Contact>();
  @Output() updatedContactDataEvent = new EventEmitter<Contact>();

  iconAdd = faAdd;
  iconUpdate = faEdit;

  constructor(){}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      number: new FormControl(null, [
        Validators.required,
        Validators.maxLength(11),
        Validators.pattern(/^[0-9]*$/)
      ])
    });
  }

  onSubmit(contact: Contact) {
    if(!this.editMode) {
      contact && this.newContactDataEvent.emit(contact);
    } else {
      contact && this.updatedContactDataEvent.emit(contact);
    }
    this.contactForm.reset();
  }

}
