import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from 'src/app/models/character.model';
import { Store } from '@ngrx/store';
import { CharacterState } from 'src/app/store/reducers/character.reducer';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {

  characters$: Observable<any>;
  
  constructor(private store: Store<{ characters: CharacterState}>) {
    this.characters$ = this.store.select(state => state.characters.items);
   }

}
