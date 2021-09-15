import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  

  constructor(private router: Router, 
    private dataService: DataService) { }

  ngOnInit() {
  }

  goToList(): void {
    this.router.navigate(['/']);
  }

  goToCreate(): void {
    this.router.navigate(['/create']);
  }

  generateUuid(): void {
    console.log('generando uuid');
    this.dataService.nombre$.emit(this._getGuid());
  }

  private _getGuid(): any {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
			c
		) {
			const r = (Math.random() * 16) | 0,
				v = c === 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	}


}
