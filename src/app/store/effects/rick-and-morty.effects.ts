import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { RickAndMortyService } from './../../services/rick-and-morty.service';
import { GetAll, GetAllSuccess } from '../actions/rickandmorty.actions';
 
@Injectable()
export class RickAndMortyEffects {
 
    constructor(
      private actions$: Actions,
      private rickAndMortyService: RickAndMortyService
    ) {}
 
  loadRickAndMortys$ = createEffect(() => this.actions$.pipe(
    ofType(GetAll),
    map(X => console.log("Fetching data")),
    mergeMap(() => this.rickAndMortyService.getAll()
      .pipe(
        map((res:any) => GetAllSuccess({data: res.results})),
        catchError(() => EMPTY)
      ))
    )
  );
}