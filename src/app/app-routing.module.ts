import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/base/home/home.component';
import { CharactersComponent } from './main/base/characters/characters.component';
import { AboutComponent } from './main/base/about/about.component';
import { DetailsComponent } from './main/base/details/details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddCharacterComponent } from './main/base/add-character/add-character.component';
import { NewCharacterComponent } from './main/base/new-character/new-character.component';
import { EditCharacterComponent } from './main/base/edit-character/edit-character.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path:'home', component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'characters', component: CharactersComponent},
  {path:'about', component: AboutComponent},
  {path:'characters/details/:id', component: DetailsComponent},
  {path:'characters/edit/:id', component: EditCharacterComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'add-character', component: AddCharacterComponent},
  {path:'new-character', component: NewCharacterComponent},
  {path:'', pathMatch: 'full', redirectTo: '/home'},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }