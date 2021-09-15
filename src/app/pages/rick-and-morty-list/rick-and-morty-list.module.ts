import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RickAndMortyListPageRoutingModule } from './rick-and-morty-list-routing.module';

import { RickAndMortyListPage } from './rick-and-morty-list.page';
import { RickAndMortyListComponent } from 'src/app/components/rick-and-morty-list/rick-and-morty-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RickAndMortyListPageRoutingModule,
  ],
  declarations: [RickAndMortyListPage, 
    RickAndMortyListComponent]
})
export class RickAndMortyListPageModule {}
