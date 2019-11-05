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
  
  /*
  Constructor used to initialize the fields and inject the dependencies(Using angular DI [Dependency Injection]) and pass them as constructor arguments 
  */
  constructor(private zipCodeService:ZipCodeService) {
    this.zipCodeData = "";
  }

  /*
    Function used to reset the fields values to default, when hit the clear button
  */
  clearForm() {
    this.zipCodeData = "";
    this.zipCodeResult = "";
  }

  /*
    Function is invoked from the view, when user hit the "Validate" button. 
    It internally execute the service function to parse the request and 
    return the valid zipcode arrays and display the result in the view.
  */
  validateZipCodes() {
    this.zipCodeResult = this.zipCodeService.validateZipCode(this.zipCodeData);
  }
}
