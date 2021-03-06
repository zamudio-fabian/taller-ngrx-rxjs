import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {}

  goToList(): void {
    this.router.navigate(['/']);
  }

  goToRickAndMortyList(): void {
    this.router.navigate(['/rick-and-morty-list']);
  }

  goToCreate(): void {
    this.router.navigate(['/create']);
  }

}
