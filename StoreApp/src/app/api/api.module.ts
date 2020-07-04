/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AccountResourceService } from './services/account-resource.service';
import { UserJwtControllerService } from './services/user-jwt-controller.service';
import { CartResourceService } from './services/cart-resource.service';
import { CategoryResourceService } from './services/category-resource.service';
import { CommandResourceService } from './services/command-resource.service';
import { CustomerResourceService } from './services/customer-resource.service';
import { ProductResourceService } from './services/product-resource.service';
import { QueryResourceService } from './services/query-resource.service';
import { SaleResourceService } from './services/sale-resource.service';
import { StoreResourceService } from './services/store-resource.service';
import { UserResourceService } from './services/user-resource.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AccountResourceService,
    UserJwtControllerService,
    CartResourceService,
    CategoryResourceService,
    CommandResourceService,
    CustomerResourceService,
    ProductResourceService,
    QueryResourceService,
    SaleResourceService,
    StoreResourceService,
    UserResourceService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
