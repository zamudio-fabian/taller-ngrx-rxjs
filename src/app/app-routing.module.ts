import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [  
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then(m => m.CreatePageModule)
  },
  {
    path: 'rick-and-morty-list',
    loadChildren: () => import('./pages/rick-and-morty-list/rick-and-morty-list.module').then(m => m.RickAndMortyListPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
