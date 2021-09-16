import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  export class RickAndMortyService {
    constructor (private http: HttpClient) {}
  
    getAll() {
      return this.http.get('https://rickandmortyapi.com/api/character');
    }

    find(id: number) {
        return this.http.get('https://rickandmortyapi.com/api/character/' + id);
    }
  }