import { Component } from '@angular/core';
import { ZipCodeService } from './zipcode.service';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipCodeComponent {
  zipCodeData:any;
  zipCodeResult:any;
  
  constructor(private zipCodeService:ZipCodeService) {
    this.zipCodeData = "";
  }

  //This function used to clear the form values
  clearForm() {
    this.zipCodeData = "";
    this.zipCodeResult = "";
  }

  //This function used to validate the zipcode values
  validateZipCodes() {
    this.zipCodeResult = this.zipCodeService.validateZipCode(this.zipCodeData);
  }
}
