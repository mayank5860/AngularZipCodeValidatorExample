import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZipCodeComponent } from './zipcode.component';
import { FormsModule } from '@angular/forms';
import { ZipCodeService } from './zipcode.service';

@NgModule({
  declarations: [ZipCodeComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [ZipCodeService],
  exports: []
})
export class ZipCodeModule { }
