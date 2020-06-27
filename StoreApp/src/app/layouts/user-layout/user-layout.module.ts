import { DashboardComponent } from './../../components/dashboard/dashboard.component';
import { CategoryListComponent } from './../../components/category-list/category-list.component';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserLayoutPageRoutingModule } from './user-layout-routing.module';

import { UserLayoutPage } from './user-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserLayoutPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UserLayoutPage],
  entryComponents: [CategoryListComponent, DashboardComponent]
})
export class UserLayoutPageModule {}
