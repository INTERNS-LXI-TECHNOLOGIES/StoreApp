import { CategoryListComponent } from 'src/app/components/category-list/category-list.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { CategoryDetailedViewComponent } from './components/category-detailed-view/category-detailed-view.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { UserLayoutPageModule } from './layouts/user-layout/user-layout.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductDetailedViewComponent } from './components/product-detailed-view/product-detailed-view.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },


  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'create-product',
    loadChildren: () => import('./pages/create-product/create-product.module').then(m => m.CreateProdouctPageModule)
  },

  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'user-layout',
    loadChildren: () => import('./layouts/user-layout/user-layout.module').then(m => m.UserLayoutPageModule)
  },
  {
    path: 'admin-layout',
    loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutPageModule)
  },
  // {
  //   path: 'category-list',
  //   component: CategoryListComponent
  // },
  {
    path: 'update-product/:id',
    component: UpdateProductComponent
  },
  {
    path: 'create-category',
    component: CreateCategoryComponent
  },
  {
    path: 'category-detailed-view/:id',
    component: CategoryDetailedViewComponent
  },
  {
    path: 'product-detailed-view/:id',
    component: ProductDetailedViewComponent
  },
  {
    path: 'update-category/:id',
    component: UpdateCategoryComponent
  },
  {
    path: 'update-stock/:id',
    component: UpdateStockComponent
  },
  {
    path: 'category-list',
    loadChildren: () => import('./pages/category-list/category-list.module').then( m => m.CategoryListPageModule)
  }, 





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
