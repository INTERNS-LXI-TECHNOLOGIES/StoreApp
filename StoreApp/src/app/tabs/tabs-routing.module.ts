import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: 'tab1',
      //   loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      // },
      {
        path: 'tab1',
<<<<<<< HEAD
        loadChildren: () => import('../pages/categories/categories.module').then(m => m.CategoriesPageModule)
=======
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
>>>>>>> 0304fc1250dea112729fcd2c0a3b3cce0dae24ef
      },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../pages/mycart/mycart.module').then(m => m.MycartPageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
