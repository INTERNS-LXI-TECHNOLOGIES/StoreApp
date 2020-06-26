/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDTO } from '../models/category-dto';
import { ProductDTO } from '../models/product-dto';
import { SaleDTO } from '../models/sale-dto';

/**
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly findAllCategoriesUsingGETPath = '/api/query/findAllCategories';
  static readonly findAllProductsByCategoryIdUsingGETPath = '/api/query/findAllProductsByCategoryId/{categoryId}';
  static readonly findAllSalesUsingGETPath = '/api/query/findAllSales';
  static readonly findCategoryUsingGETPath = '/api/query/findCategory/{categoryId}';
  static readonly findProductUsingGETPath = '/api/query/findProduct/{productId}';
  static readonly findStockByCategoryIdUsingGETPath = '/api/query/findStockByCategoryId/{categoryId}';
  static readonly findStockByProductIdUsingGETPath = '/api/query/findStockByProductId/{productId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * findAllCategories
   * @return OK
   */
  findAllCategoriesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<CategoryDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllCategories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDTO>>;
      })
    );
  }
  /**
   * findAllCategories
   * @return OK
   */
  findAllCategoriesUsingGET(): __Observable<Array<CategoryDTO>> {
    return this.findAllCategoriesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<CategoryDTO>)
    );
  }

  /**
   * findAllProductsByCategoryId
   * @param categoryId categoryId
   * @return OK
   */
  findAllProductsByCategoryIdUsingGETResponse(categoryId: string): __Observable<__StrictHttpResponse<Array<ProductDTO>>> {
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
  findAllProductsByCategoryIdUsingGET(categoryId: string): __Observable<Array<ProductDTO>> {
    return this.findAllProductsByCategoryIdUsingGETResponse(categoryId).pipe(
      __map(_r => _r.body as Array<ProductDTO>)
    );
  }

  /**
   * findAllSales
   * @return OK
   */
  findAllSalesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<SaleDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllSales`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SaleDTO>>;
      })
    );
  }
  /**
   * findAllSales
   * @return OK
   */
  findAllSalesUsingGET(): __Observable<Array<SaleDTO>> {
    return this.findAllSalesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<SaleDTO>)
    );
  }

  /**
   * findCategory
   * @param categoryId categoryId
   * @return OK
   */
  findCategoryUsingGETResponse(categoryId: string): __Observable<__StrictHttpResponse<CategoryDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findCategory/${encodeURIComponent(categoryId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDTO>;
      })
    );
  }
  /**
   * findCategory
   * @param categoryId categoryId
   * @return OK
   */
  findCategoryUsingGET(categoryId: string): __Observable<CategoryDTO> {
    return this.findCategoryUsingGETResponse(categoryId).pipe(
      __map(_r => _r.body as CategoryDTO)
    );
  }

  /**
   * findProduct
   * @param productId productId
   * @return OK
   */
  findProductUsingGETResponse(productId: string): __Observable<__StrictHttpResponse<ProductDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findProduct/${encodeURIComponent(productId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductDTO>;
      })
    );
  }
  /**
   * findProduct
   * @param productId productId
   * @return OK
   */
  findProductUsingGET(productId: string): __Observable<ProductDTO> {
    return this.findProductUsingGETResponse(productId).pipe(
      __map(_r => _r.body as ProductDTO)
    );
  }

  /**
   * findStockByCategoryId
   * @param categoryId categoryId
   * @return OK
   */
  findStockByCategoryIdUsingGETResponse(categoryId: string): __Observable<__StrictHttpResponse<number>> {
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
  findStockByCategoryIdUsingGET(categoryId: string): __Observable<number> {
    return this.findStockByCategoryIdUsingGETResponse(categoryId).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * findStockByProductId
   * @param productId productId
   * @return OK
   */
  findStockByProductIdUsingGETResponse(productId: string): __Observable<__StrictHttpResponse<number>> {
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
  findStockByProductIdUsingGET(productId: string): __Observable<number> {
    return this.findStockByProductIdUsingGETResponse(productId).pipe(
      __map(_r => _r.body as number)
    );
  }
}

module QueryResourceService {
}

export { QueryResourceService }
