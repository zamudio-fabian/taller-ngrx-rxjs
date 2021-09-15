import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnDestroy {

  mensaje: string = '';

  constructor( 
    private dataService: DataService) { }

  ngOnInit() {
    this.uuidSuscription = this.dataService.nombre$.subscribe((mens) => {
      this.mensaje = mens;
      console.log('hijo ',mens);
    })
  }






  


  uuidSuscription: Subscription | undefined;
  
  ngOnDestroy(): void {
    //this.uuidSuscription?.unsubscribe();
  }

}
