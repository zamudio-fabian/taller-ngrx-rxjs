import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Character } from 'src/app/models/character.model';
import { CharacterState } from 'src/app/store/reducers/character.reducer';

import { createCharacter } from 'src/app/store/actions/characters.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {

  character: Character = {id:"" ,name: "", power: 1};
  constructor(private router: Router, 
    private store: Store<CharacterState>) { }

  goToList(): void {
    this.router.navigate(['/']);
  }

  save(): void {
    if(this.character.name.length == 0) return;
    this.character.id = this._getGuid();
    this.store.dispatch(createCharacter({ character: this.character } ));
    this.goToList();
  }

  private _getGuid(): any {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
			c
		) {
			const r = (Math.random() * 16) | 0,
				v = c === 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	}

}
