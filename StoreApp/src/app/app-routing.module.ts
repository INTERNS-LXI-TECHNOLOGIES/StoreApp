import { CategoryListComponent } from 'src/app/components/category-list/category-list.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { UserLayoutPageModule } from './layouts/user-layout/user-layout.module';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth/auth-guard.service';

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
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'create-product',
    loadChildren: () => import('./pages/create-product/create-product.module').then( m => m.CreateProdouctPageModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'user-layout',
    loadChildren: () => import('./layouts/user-layout/user-layout.module').then( m => m.UserLayoutPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin-layout',
    loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then( m => m.AdminLayoutPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'update-product/:id',
    component: UpdateProductComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'category-list',
    component: CategoryListComponent,
    canActivate: [AuthGuardService]
  }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
