import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnChanges {
  listaCharacters: any = [];
  firstRow: any = [];
  secondRow: any = [];
  thirdRow: any = [];
  fourthRow: any = [];
  fifthRow: any = [];
  @Input() page: number = 1;
  @Input() totalCharsAdded = 0;

  constructor(private charactersService: CharactersService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.page = changes['page'].currentValue;
    this.charactersService.getCharactersAddeds().subscribe((result) => {
      this.listaCharacters = result;

      this.firstRow = [];
      this.secondRow = [];
      this.thirdRow = [];
      this.fourthRow = [];
      this.fifthRow = [];
      for (let index = 0; index < 4; index++) {
        this.firstRow.push(this.listaCharacters[index+this.page*20]);
        this.secondRow.push(this.listaCharacters[index + 4 + this.page*20]);
        this.thirdRow.push(this.listaCharacters[index + 8 + this.page*20]);
        this.fourthRow.push(this.listaCharacters[index + 12 + this.page*20]);
        this.fifthRow.push(this.listaCharacters[index + 16 + this.page*20]);
      }
    });
  }
}
