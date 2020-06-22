import { CartService } from './../core/services/cart.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [

    CategoryListComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    CartModalComponent
  ],
  imports: [CommonModule, IonicModule, FormsModule, HttpClientModule],

  exports: [
    CartModalComponent,
    CategoryListComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    ProductListComponent,
    UpdateProductComponent
  ]
})
export class ComponentsModule {}
