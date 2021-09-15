import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CharactersListComponent } from 'src/app/components/characters-list/characters-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,
    CharactersListComponent]
})
export class HomePageModule {}
