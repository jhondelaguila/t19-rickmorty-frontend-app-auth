import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './base/home/home.component';
import { AboutComponent } from './base/about/about.component';
import { DetailsComponent } from './base/details/details.component';
import { CharactersComponent } from './base/characters/characters.component';
import { CharacterComponent } from './base/characters/character/character.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddCharacterComponent } from './base/add-character/add-character.component';
import { NewCharacterComponent } from './base/new-character/new-character.component';
import { EditCharacterComponent } from './base/edit-character/edit-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    BaseComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    CharactersComponent,
    CharacterComponent,
    AddCharacterComponent,
    NewCharacterComponent,
    EditCharacterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    BaseComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    CharactersComponent,
    CharacterComponent,
    AddCharacterComponent,
    NewCharacterComponent,
    EditCharacterComponent,
  ],
})
export class MainModule {}
