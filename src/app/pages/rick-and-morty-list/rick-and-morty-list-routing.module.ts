import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RickAndMortyListPage } from './rick-and-morty-list.page';


const routes: Routes = [
  {
    path: '',
    component: RickAndMortyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickAndMortyListPageRoutingModule {}
