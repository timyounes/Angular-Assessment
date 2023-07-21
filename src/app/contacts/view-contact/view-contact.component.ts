import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{

  contact: Contact;
  id: number;
  location: any;
  iconBack = faArrowAltCircleLeft;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private _location: Location){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.contactsService.getContactById(this.id).subscribe(
          (response: Contact) => {
            this.contact = response;
          },
          (error) => {
            console.log(error);
          });
      }
    );
  }

  onBackContacts() {
    this._location.back();
  }
}
