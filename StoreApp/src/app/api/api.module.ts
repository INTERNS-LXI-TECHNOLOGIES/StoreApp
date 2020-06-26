/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AccountResourceService } from './services/account-resource.service';
import { UserJwtControllerService } from './services/user-jwt-controller.service';
import { CategoryResourceService } from './services/category-resource.service';
import { CommandResourceService } from './services/command-resource.service';
import { CustomerResourceService } from './services/customer-resource.service';
import { ProductResourceService } from './services/product-resource.service';
import { QueryResourceService } from './services/query-resource.service';
import { SaleResourceService } from './services/sale-resource.service';
import { StockResourceService } from './services/stock-resource.service';
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
    CategoryResourceService,
    CommandResourceService,
    CustomerResourceService,
    ProductResourceService,
    QueryResourceService,
    SaleResourceService,
    StockResourceService,
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
