import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http:HttpClient) { }

  getCharactersAddeds(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/characters?added=true');
  }

  getAllCharacters(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/characters');
  }

  getCharacterById(id:string): Observable<any>{
    return this.http.get<any>('http://localhost:3000/characters?id='+id);
  }

  getCharactersNotAddeds(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/characters?added=false');
  }
  
  addCharacter(id:string,char:any): Observable<any>{
    return this.http.patch('http://localhost:3000/characters/'+id,char);
  }

  createCharacter(newChar:any): Observable<any>{
    return this.http.post('http://localhost:3000/characters',newChar);
  }

  editCharacter(id:string,char:any): Observable<any>{
    return this.http.put('http://localhost:3000/characters/'+id,char);
  }
}
