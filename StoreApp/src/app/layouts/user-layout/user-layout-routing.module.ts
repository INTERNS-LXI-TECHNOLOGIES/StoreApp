import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLayoutPage } from './user-layout.page';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            ComponentsModule],
  exports: [RouterModule],
})
export class UserLayoutPageRoutingModule {}
