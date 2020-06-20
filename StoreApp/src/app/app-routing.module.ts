import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'create-product',
    loadChildren: () => import('./pages/create-product/create-product.module').then( m => m.CreateProdouctPageModule)
  },
  {
    path: 'create-category',
    loadChildren: () => import('./pages/create-category/create-category.module').then( m => m.CreateCategoryPageModule)
  },
  {
    path: 'update-product',
    loadChildren: () => import('./pages/update-product/update-product.module').then( m => m.UpdateProductPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
