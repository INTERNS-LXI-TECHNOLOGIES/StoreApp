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
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly findAllCartByCustomerIdUsingGETPath = '/api/query/findAllCartByCustomerId/{customerId}';
  static readonly findAllProductsByCategoryIdUsingGETPath = '/api/query/findAllProductsByCategoryId/{categoryId}';
  static readonly findStockByCategoryIdUsingGETPath = '/api/query/findStockByCategoryId/{categoryId}';
  static readonly findStockByProductIdUsingGETPath = '/api/query/findStockByProductId/{productId}';
  static readonly getReportAsPdfUsingDataBaseUsingGETPath = '/api/query/pdf/{customerId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * findAllCartByCustomerId
   * @param customerId customerId
   * @return OK
   */
  findAllCartByCustomerIdUsingGETResponse(customerId: number): __Observable<__StrictHttpResponse<Array<CartDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllCartByCustomerId/${encodeURIComponent(customerId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CartDTO>>;
      })
    );
  }
  /**
   * findAllCartByCustomerId
   * @param customerId customerId
   * @return OK
   */
  findAllCartByCustomerIdUsingGET(customerId: number): __Observable<Array<CartDTO>> {
    return this.findAllCartByCustomerIdUsingGETResponse(customerId).pipe(
      __map(_r => _r.body as Array<CartDTO>)
    );
  }

  /**
   * findAllProductsByCategoryId
   * @param categoryId categoryId
   * @return OK
   */
  findAllProductsByCategoryIdUsingGETResponse(categoryId: number): __Observable<__StrictHttpResponse<Array<ProductDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllProductsByCategoryId/${encodeURIComponent(categoryId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductDTO>>;
      })
    );
  }
  /**
   * findAllProductsByCategoryId
   * @param categoryId categoryId
   * @return OK
   */
  findAllProductsByCategoryIdUsingGET(categoryId: number): __Observable<Array<ProductDTO>> {
    return this.findAllProductsByCategoryIdUsingGETResponse(categoryId).pipe(
      __map(_r => _r.body as Array<ProductDTO>)
    );
  }

  /**
   * findStockByCategoryId
   * @param categoryId categoryId
   * @return OK
   */
  findStockByCategoryIdUsingGETResponse(categoryId: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findStockByCategoryId/${encodeURIComponent(categoryId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * findStockByCategoryId
   * @param categoryId categoryId
   * @return OK
   */
  findStockByCategoryIdUsingGET(categoryId: number): __Observable<number> {
    return this.findStockByCategoryIdUsingGETResponse(categoryId).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * findStockByProductId
   * @param productId productId
   * @return OK
   */
  findStockByProductIdUsingGETResponse(productId: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findStockByProductId/${encodeURIComponent(productId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * findStockByProductId
   * @param productId productId
   * @return OK
   */
  findStockByProductIdUsingGET(productId: number): __Observable<number> {
    return this.findStockByProductIdUsingGETResponse(productId).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getReportAsPdfUsingDataBase
   * @param customerId customerId
   * @return OK
   */
  getReportAsPdfUsingDataBaseUsingGETResponse(customerId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/pdf/${encodeURIComponent(customerId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * getReportAsPdfUsingDataBase
   * @param customerId customerId
   * @return OK
   */
  getReportAsPdfUsingDataBaseUsingGET(customerId: number): __Observable<string> {
    return this.getReportAsPdfUsingDataBaseUsingGETResponse(customerId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module QueryResourceService {
}

export { QueryResourceService }
