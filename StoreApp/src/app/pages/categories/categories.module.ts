import { ComponentsModule } from './../../components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';
import { CategoryComponent } from 'src/app/components/category/category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CategoriesPage],
  entryComponents: [CategoryComponent]
})
export class CategoriesPageModule {}
