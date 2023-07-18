import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../characters/characters.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent {
  character:any = null;

  constructor(private route: ActivatedRoute,private characterService: CharactersService, private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const elementId:number = Number(params['id']);
      this.characterService.getCharacterById(elementId.toString())
        .subscribe(result => {
          this.character = result;              
        });      
    });
  }

  edit(){
    this.characterService.editCharacter(this.character[0].id.toString(),this.character[0]).subscribe();
    this.router.navigate(['characters']);
  }
}
