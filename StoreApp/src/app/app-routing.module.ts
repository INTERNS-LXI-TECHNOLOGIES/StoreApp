import { UpdateProductComponent } from './components/update-product/update-product.component';
import { UserLayoutPageModule } from './layouts/user-layout/user-layout.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'user-layout',
    loadChildren: () => import('./layouts/user-layout/user-layout.module').then( m => m.UserLayoutPageModule)
  },
  {
    path: 'admin-layout',
    loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then( m => m.AdminLayoutPageModule)
  },
  {
    path: 'update-product/:id',
    component: UpdateProductComponent
  },
  {
    path: 'category-list',
    loadChildren: () => import('./pages/category-list/category-list.module').then( m => m.CategoryListPageModule)
  },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
