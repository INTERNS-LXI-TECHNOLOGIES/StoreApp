/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductDTO } from '../models/product-dto';
import { CartDTO } from '../models/cart-dto';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly addCartUsingPOSTPath = '/api/commands/addcart/{customerId}/{noOfProduct}';
  static readonly addSaleUsingPOSTPath = '/api/commands/addsale/{customerId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * addCart
   * @param params The `CommandResourceService.AddCartUsingPOSTParams` containing the following parameters:
   *
   * - `productDTO`: productDTO
   *
   * - `noOfProduct`: noOfProduct
   *
   * - `customerId`: customerId
   */
  addCartUsingPOSTResponse(params: CommandResourceService.AddCartUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.productDTO;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/addcart/${encodeURIComponent(params.customerId)}/${encodeURIComponent(params.noOfProduct)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * addCart
   * @param params The `CommandResourceService.AddCartUsingPOSTParams` containing the following parameters:
   *
   * - `productDTO`: productDTO
   *
   * - `noOfProduct`: noOfProduct
   *
   * - `customerId`: customerId
   */
  addCartUsingPOST(params: CommandResourceService.AddCartUsingPOSTParams): __Observable<null> {
    return this.addCartUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * addSale
   * @param params The `CommandResourceService.AddSaleUsingPOSTParams` containing the following parameters:
   *
   * - `customerId`: customerId
   *
   * - `cartDTO`: cartDTO
   */
  addSaleUsingPOSTResponse(params: CommandResourceService.AddSaleUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.cartDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/addsale/${encodeURIComponent(params.customerId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * addSale
   * @param params The `CommandResourceService.AddSaleUsingPOSTParams` containing the following parameters:
   *
   * - `customerId`: customerId
   *
   * - `cartDTO`: cartDTO
   */
  addSaleUsingPOST(params: CommandResourceService.AddSaleUsingPOSTParams): __Observable<null> {
    return this.addSaleUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CommandResourceService {

  /**
   * Parameters for addCartUsingPOST
   */
  export interface AddCartUsingPOSTParams {

    /**
     * productDTO
     */
    productDTO: ProductDTO;

    /**
     * noOfProduct
     */
    noOfProduct: number;

    /**
     * customerId
     */
    customerId: number;
  }

  /**
   * Parameters for addSaleUsingPOST
   */
  export interface AddSaleUsingPOSTParams {

    /**
     * customerId
     */
    customerId: number;

    /**
     * cartDTO
     */
    cartDTO: Array<CartDTO>;
  }
}

export { CommandResourceService }
