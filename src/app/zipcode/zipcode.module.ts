import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZipCodeComponent } from './zipcode.component';
import { FormsModule } from '@angular/forms';
import { ZipCodeService } from './zipcode.service';
import { ZipCodeRoutingModule } from './zip-routing.module';

@NgModule({
  declarations: [ZipCodeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ZipCodeRoutingModule
  ],
  providers: [ZipCodeService],
  exports: []
})
export class ZipCodeModule { }
