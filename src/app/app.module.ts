import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as CharactersReducer from './store/reducers/character.reducer';
import * as RickAndMortyReducer from './store/reducers/rick-and-morty.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RickAndMortyEffects } from './store/effects/rick-and-morty.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
		RouterModule,
    AppRoutingModule, 
    HttpClientModule,
    StoreModule.forRoot({ 
      characters: CharactersReducer.reducer,
      rickandmorty: RickAndMortyReducer.reducer
      }, {}),
    EffectsModule.forRoot([RickAndMortyEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
