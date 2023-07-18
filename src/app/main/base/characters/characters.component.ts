import { Component,OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{
  actualPage:number = 0;
  totalChars:number = 0;
  totalPages:number = 0;

  constructor(private characterService: CharactersService){}

  ngOnInit(): void {
      this.characterService.getCharactersAddeds().subscribe(result => {
        this.totalPages = Number((result.length/20).toString().split('.')[0]);
        this.totalChars = result.length;
        console.log(this.totalChars);
        
      });
  }

  nextPage(){
    if(this.actualPage<41) this.actualPage++;
  }
  previousPage(){
    if(this.actualPage>0) this.actualPage--;
  }
  goToFirstPage(){
    this.actualPage = 0;
  }
  goToMiddlePage(){
    this.actualPage = 20;
  }
  goToLastPage(){
    this.actualPage = 41;
  }
}
