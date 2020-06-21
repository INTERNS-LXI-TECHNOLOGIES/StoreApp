import { ComponentsModule } from './../../components.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutPage } from './admin-layout.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            ComponentsModule],
  exports: [RouterModule],
  entryComponents: []
})
export class AdminLayoutPageRoutingModule {}
