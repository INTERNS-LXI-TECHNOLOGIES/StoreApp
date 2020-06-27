/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductDTO } from '../models/product-dto';
import { SaleDTO } from '../models/sale-dto';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly addProductUsingPOSTPath = '/api/commands/addProduct/{noOfStock}';
  static readonly addSaleUsingPOSTPath = '/api/commands/addSales';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `CommandResourceService.AddProductUsingPOSTParams` containing the following parameters:
   *
   * - `productDTO`: productDTO
   *
   * - `noOfStock`: noOfStock
   */
  addProductUsingPOSTResponse(params: CommandResourceService.AddProductUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.productDTO;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/addProduct/${params.noOfStock}`,
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
   * @param params The `CommandResourceService.AddProductUsingPOSTParams` containing the following parameters:
   *
   * - `productDTO`: productDTO
   *
   * - `noOfStock`: noOfStock
   */
  addProductUsingPOST(params: CommandResourceService.AddProductUsingPOSTParams): __Observable<null> {
    return this.addProductUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param saleDTO saleDTO
   */
  addSaleUsingPOSTResponse(saleDTO: Array<SaleDTO>): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = saleDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/addSales`,
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
   * @param saleDTO saleDTO
   */
  addSaleUsingPOST(saleDTO: Array<SaleDTO>): __Observable<null> {
    return this.addSaleUsingPOSTResponse(saleDTO).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CommandResourceService {

  /**
   * Parameters for addProductUsingPOST
   */
  export interface AddProductUsingPOSTParams {

    /**
     * productDTO
     */
    productDTO: ProductDTO;

    /**
     * noOfStock
     */
    noOfStock: string;
  }
}

export { CommandResourceService }
