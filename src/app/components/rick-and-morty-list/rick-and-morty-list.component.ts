import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RickAndMortyState } from 'src/app/store/reducers/rick-and-morty.reducer';

@Component({
  selector: 'app-rick-and-morty-list',
  templateUrl: './rick-and-morty-list.component.html',
  styleUrls: ['./rick-and-morty-list.component.scss']
})
export class RickAndMortyListComponent implements OnInit {

  list$: Observable<any>;
   
  constructor(private router: Router, 
    private store: Store<{ rickandmorty: RickAndMortyState}>) {
      this.list$ = this.store.select(state => state.rickandmorty.items);
  }

  ngOnInit() {
    this.store.dispatch( { type: '[RICKANDMORTY_ACTION] GetAll' } );
  }

  goToDetail(id: number): void {
    this.router.navigate(['/rick-and-morty-detail/'+id]);
  }

}
