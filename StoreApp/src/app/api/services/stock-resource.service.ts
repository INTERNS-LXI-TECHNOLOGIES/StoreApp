/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { StockDTO } from '../models/stock-dto';

/**
 * Stock Resource
 */
@Injectable({
  providedIn: 'root',
})
class StockResourceService extends __BaseService {
  static readonly getAllStocksUsingGETPath = '/api/stocks';
  static readonly createStockUsingPOSTPath = '/api/stocks';
  static readonly updateStockUsingPUTPath = '/api/stocks';
  static readonly getStockUsingGETPath = '/api/stocks/{id}';
  static readonly deleteStockUsingDELETEPath = '/api/stocks/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param filter filter
   * @return OK
   */
  getAllStocksUsingGETResponse(filter?: string): __Observable<__StrictHttpResponse<Array<StockDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (filter != null) __params = __params.set('filter', filter.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stocks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StockDTO>>;
      })
    );
  }
  /**
   * @param filter filter
   * @return OK
   */
  getAllStocksUsingGET(filter?: string): __Observable<Array<StockDTO>> {
    return this.getAllStocksUsingGETResponse(filter).pipe(
      __map(_r => _r.body as Array<StockDTO>)
    );
  }

  /**
   * @param stockDTO stockDTO
   * @return OK
   */
  createStockUsingPOSTResponse(stockDTO: StockDTO): __Observable<__StrictHttpResponse<StockDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = stockDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/stocks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StockDTO>;
      })
    );
  }
  /**
   * @param stockDTO stockDTO
   * @return OK
   */
  createStockUsingPOST(stockDTO: StockDTO): __Observable<StockDTO> {
    return this.createStockUsingPOSTResponse(stockDTO).pipe(
      __map(_r => _r.body as StockDTO)
    );
  }

  /**
   * @param stockDTO stockDTO
   * @return OK
   */
  updateStockUsingPUTResponse(stockDTO: StockDTO): __Observable<__StrictHttpResponse<StockDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = stockDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/stocks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StockDTO>;
      })
    );
  }
  /**
   * @param stockDTO stockDTO
   * @return OK
   */
  updateStockUsingPUT(stockDTO: StockDTO): __Observable<StockDTO> {
    return this.updateStockUsingPUTResponse(stockDTO).pipe(
      __map(_r => _r.body as StockDTO)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getStockUsingGETResponse(id: number): __Observable<__StrictHttpResponse<StockDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stocks/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StockDTO>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getStockUsingGET(id: number): __Observable<StockDTO> {
    return this.getStockUsingGETResponse(id).pipe(
      __map(_r => _r.body as StockDTO)
    );
  }

  /**
   * @param id id
   */
  deleteStockUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/stocks/${id}`,
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
   * @param id id
   */
  deleteStockUsingDELETE(id: number): __Observable<null> {
    return this.deleteStockUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module StockResourceService {
}

export { StockResourceService }
