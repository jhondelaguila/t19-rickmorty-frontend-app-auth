import { Component } from '@angular/core';
import { CharactersService } from '../characters/characters.service';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css'],
})
export class NewCharacterComponent {
  id: number = 0;
  name: string = '';
  status: string = '';
  specie: string = '';
  type: string = '';
  gender: string = '';
  origin: string = '';
  location: string = '';
  image: string = '';

  constructor(private characterService: CharactersService) {}

  create() {
    this.characterService
      .getAllCharacters()
      .subscribe((result) => (this.id = result.length + 2));
    let newChar = {
      id: this.id,
      name: this.name,
      status: this.status,
      species: this.specie,
      type: this.type,
      gender: this.gender,
      origin: {
        name: this.origin,
        url: '',
      },
      location: {
        name: this.location,
        url: '',
      },
      image: this.image,
      episode: [],
      url: '',
      created: '',
      added: false,
    };
    this.characterService.createCharacter(newChar).subscribe(() => {
      this.name = '';
      this.status = '';
      this.specie = '';
      this.type = '';
      this.gender = '';
      this.origin = '';
      this.location = '';
      this.image = '';
    });
  }
}
