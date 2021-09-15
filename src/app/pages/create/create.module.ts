import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CreatePageRoutingModule,
  ],
  declarations: [CreatePage]
})
export class CreatePageModule {}
