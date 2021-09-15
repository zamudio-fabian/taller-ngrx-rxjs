import { Action, createReducer, on } from '@ngrx/store';
import { createCharacter, deleteCharacter, reset } from '../actions/characters.actions';
import { Character } from '../../models/character.model';

export interface CharacterState {
    items: Character[];
}
 
export const initialState = {
    items: [] as Character[]
};
 
const _charactersReducer = createReducer(
    initialState,
    on(createCharacter, (state, { character }) => _createCharacter(state, character)),
    on(deleteCharacter, (state, { id }) => _deleteCharacter(state, id)),
    on(reset, state => ({items: []})) 
);

function _createCharacter(state: CharacterState, character: Character) {
    return ({ ...state, items: [...state.items, character]});
}

function _deleteCharacter(state: CharacterState, id: string) {
    return ({ ...state, items: state.items.filter(x => x.id != id)});
}
 
export function reducer(state: CharacterState | undefined, action: Action) {
  return _charactersReducer(state, action);
}