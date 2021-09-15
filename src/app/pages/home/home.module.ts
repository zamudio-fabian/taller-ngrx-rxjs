import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HijoComponent } from 'src/app/components/hijo/hijo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,
    HijoComponent]
})
export class HomePageModule {}
