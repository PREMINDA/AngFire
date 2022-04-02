import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationGroupPageComponent } from './registration-group-page/registration-group-page.component';
import {RegistrationFormComponent} from "./registration-form/registration-form.component";

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {
    path:'login',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
