import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rick-and-morty-list-page',
  templateUrl: './rick-and-morty-list.page.html',
  styleUrls: ['./rick-and-morty-list.page.scss'],
})
export class RickAndMortyListPage{

   
  constructor(private router: Router) {
    }


  goToList(): void {
    this.router.navigate(['/']);
  }

  goToRickAndMortyList(): void {
    this.router.navigate(['/rick-and-morty-list']);
  }

}
