import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProdouctPageRoutingModule } from './create-prodouct-routing.module';

import { CreateProdouctPage } from './create-prodouct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProdouctPageRoutingModule
  ],
  declarations: [CreateProdouctPage]
})
export class CreateProdouctPageModule {}
