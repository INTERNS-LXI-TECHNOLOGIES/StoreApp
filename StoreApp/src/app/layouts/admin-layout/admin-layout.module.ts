import { DashboardComponent } from './../../components/dashboard/dashboard.component';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLayoutPageRoutingModule } from './admin-layout-routing.module';

import { AdminLayoutPage } from './admin-layout.page';
import { CategoryListComponent } from 'src/app/components/category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLayoutPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminLayoutPage],
  entryComponents: [CategoryListComponent, DashboardComponent]
})
export class AdminLayoutPageModule {}
