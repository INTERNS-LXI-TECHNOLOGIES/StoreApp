/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OptionalOfListOfProductDTO } from '../models/optional-of-list-of-product-dto';
import { ProductDTO } from '../models/product-dto';

/**
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly findAllProductsByBrandUsingGETPath = '/api/query/findAllProductsByBrand/{brand}';
  static readonly findAllProductsByCategoryIdUsingGETPath = '/api/query/findAllProductsByCategoryId/{categoryId}';
  static readonly findStockByCategoryIdUsingGETPath = '/api/query/findStockByCategoryId/{categoryId}';
  static readonly findStockByProductIdUsingGETPath = '/api/query/findStockByProductId/{productId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
<<<<<<< HEAD:StoreApp/src/app/src/app/api/services/query-resource.service.ts
   * @param brand brand
   * @return OK
   */
  findAllProductsByBrandUsingGETResponse(brand: string): __Observable<__StrictHttpResponse<OptionalOfListOfProductDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllProductsByBrand/${brand}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OptionalOfListOfProductDTO>;
      })
    );
  }
  /**
   * @param brand brand
   * @return OK
   */
  findAllProductsByBrandUsingGET(brand: string): __Observable<OptionalOfListOfProductDTO> {
    return this.findAllProductsByBrandUsingGETResponse(brand).pipe(
      __map(_r => _r.body as OptionalOfListOfProductDTO)
    );
  }

  /**
=======
   * findAllProductsByCategoryId
>>>>>>> d6591157c8a670de8efae21210aa35620ca04205:StoreApp/src/app/api/services/query-resource.service.ts
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
}

module QueryResourceService {
}

export { QueryResourceService }
