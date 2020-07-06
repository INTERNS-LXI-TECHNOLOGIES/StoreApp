/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CartDTO } from '../models/cart-dto';
import { ProductDTO } from '../models/product-dto';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly addCartUsingPOSTPath = '/api/commands/addcart/{customerId}';
  static readonly addSaleUsingPOSTPath = '/api/commands/addsale/{customerId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `CommandResourceService.AddCartUsingPOSTParams` containing the following parameters:
   *
   * - `productDTO`: productDTO
   *
   * - `customerId`: customerId
   *
   * @return OK
   */
  addCartUsingPOSTResponse(params: CommandResourceService.AddCartUsingPOSTParams): __Observable<__StrictHttpResponse<CartDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.productDTO;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/addcart/${params.customerId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CartDTO>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.AddCartUsingPOSTParams` containing the following parameters:
   *
   * - `productDTO`: productDTO
   *
   * - `customerId`: customerId
   *
   * @return OK
   */
  addCartUsingPOST(params: CommandResourceService.AddCartUsingPOSTParams): __Observable<CartDTO> {
    return this.addCartUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as CartDTO)
    );
  }

  /**
   * @param params The `CommandResourceService.AddSaleUsingPOSTParams` containing the following parameters:
   *
   * - `customerId`: customerId
   *
   * - `cartDTO`: cartDTO
   *
   * @return OK
   */
  addSaleUsingPOSTResponse(params: CommandResourceService.AddSaleUsingPOSTParams): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.cartDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/addsale/${params.customerId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param params The `CommandResourceService.AddSaleUsingPOSTParams` containing the following parameters:
   *
   * - `customerId`: customerId
   *
   * - `cartDTO`: cartDTO
   *
   * @return OK
   */
  addSaleUsingPOST(params: CommandResourceService.AddSaleUsingPOSTParams): __Observable<boolean> {
    return this.addSaleUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as boolean)
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
