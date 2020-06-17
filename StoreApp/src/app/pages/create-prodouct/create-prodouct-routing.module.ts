import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProdouctPage } from './create-prodouct.page';

const routes: Routes = [
  {
    path: '',
    component: CreateProdouctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateProdouctPageRoutingModule {}
