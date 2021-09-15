import { Action, createReducer, on } from '@ngrx/store';
import { GetAllSuccess } from '../actions/rickandmorty.actions';

export interface RickAndMortyState {
    items: any[];
}
 
export const initialState = {
    items: [] as any[]
};
 
const _rickAndMortyReducer = createReducer(
    initialState,
    on(GetAllSuccess, (state, { data }) => ({...state, items: data})),
);
 
export function reducer(state: RickAndMortyState | undefined, action: Action) {
  return _rickAndMortyReducer(state, action);
}