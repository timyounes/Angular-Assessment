import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {

  iconBack = faArrowAltCircleLeft;
  constructor(private _location: Location){}

  onBackContacts() {
    this._location.back();
  }
}
