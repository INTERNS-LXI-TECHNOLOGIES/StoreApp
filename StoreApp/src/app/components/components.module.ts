import { CategoryCardComponent } from './category-card/category-card.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { ProductDetailedViewComponent } from './product-detailed-view/product-detailed-view.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
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
import { CategoryDetailedViewComponent } from './category-detailed-view/category-detailed-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [

    CategoryListComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    CartModalComponent,
    CategoryDetailedViewComponent,
    ProductDetailedViewComponent,
    DashboardComponent,
    UpdateCategoryComponent,
    UpdateStockComponent,
    CategoryCardComponent
  ],
  imports: [CommonModule, IonicModule, FormsModule, HttpClientModule],
  exports: [
    CartModalComponent,
    CategoryListComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    UpdateCategoryComponent,
    CategoryDetailedViewComponent,
    ProductDetailedViewComponent,
    DashboardComponent,
    UpdateStockComponent,
    CategoryCardComponent
  ]
})
export class ComponentsModule {}
