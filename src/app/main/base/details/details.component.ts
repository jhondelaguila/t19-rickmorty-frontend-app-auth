import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters/characters.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  character:any = null;

  constructor(private route: ActivatedRoute,private characterService: CharactersService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const elementId:number = Number(params['id']);
      this.characterService.getCharacterById(elementId.toString())
        .subscribe(result => {
          this.character = result;              
        });      
    });
  }
}
