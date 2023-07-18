import {
  Component,
  OnInit
} from '@angular/core';
import { CharactersService } from '../characters/characters.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent implements OnInit {
  charactersNotAdded: any = [];
  characterPage: any = [];
  actualPage: number = 0;
  totalPages: number = 0;
  totalChars: number = 0;

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.updatePage();
    this.characterService.getCharactersNotAddeds().subscribe((result) => {
      this.totalChars = result.length;
      this.totalPages = Number((this.totalChars / 20).toString().split('.')[0]);      
    });
  }

  add(id: number): void {
    this.characterService
      .addCharacter(id.toString(), { added: true })
      .subscribe(() => {
        this.totalChars--;
        this.updatePage();
      });
  }

  nextPage() {
    if (this.actualPage < this.totalPages){
      this.actualPage++;
      this.updatePage();
    }
  }
  
  previousPage() {
    if (this.actualPage > 0){
      this.actualPage--;
      this.updatePage();
    }
  }

  private updatePage(){
    this.characterService.getCharactersNotAddeds().subscribe((result) => {
      this.charactersNotAdded = result;
      this.characterPage = [];
      for (let index = 0; index < 20; index++) {
        this.characterPage.push(
          this.charactersNotAdded[index + this.actualPage * 20]
        );
      }
    });
  }
}
