import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZipCodeComponent } from './zipcode.component';

const routes: Routes = [
  {
    path: '',
    component: ZipCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZipCodeRoutingModule { }