import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZipCodeModule } from './zipcode/zipcode.module';
import { ZipCodeComponent } from './zipcode/zipcode.component';

const routes: Routes = [
  { path: "", 
   component: ZipCodeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ZipCodeModule]
})
export class AppRoutingModule { }