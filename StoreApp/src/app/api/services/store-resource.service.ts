/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { StoreDTO } from '../models/store-dto';

/**
 * Store Resource
 */
@Injectable({
  providedIn: 'root',
})
class StoreResourceService extends __BaseService {
  static readonly getAllStoresUsingGETPath = '/api/stores';
  static readonly createStoreUsingPOSTPath = '/api/stores';
  static readonly updateStoreUsingPUTPath = '/api/stores';
  static readonly getStoreUsingGETPath = '/api/stores/{id}';
  static readonly deleteStoreUsingDELETEPath = '/api/stores/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllStoresUsingGETResponse(): __Observable<__StrictHttpResponse<Array<StoreDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stores`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StoreDTO>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllStoresUsingGET(): __Observable<Array<StoreDTO>> {
    return this.getAllStoresUsingGETResponse().pipe(
      __map(_r => _r.body as Array<StoreDTO>)
    );
  }

  /**
   * @param storeDTO storeDTO
   * @return OK
   */
  createStoreUsingPOSTResponse(storeDTO: StoreDTO): __Observable<__StrictHttpResponse<StoreDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = storeDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/stores`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StoreDTO>;
      })
    );
  }
  /**
   * @param storeDTO storeDTO
   * @return OK
   */
  createStoreUsingPOST(storeDTO: StoreDTO): __Observable<StoreDTO> {
    return this.createStoreUsingPOSTResponse(storeDTO).pipe(
      __map(_r => _r.body as StoreDTO)
    );
  }

  /**
   * @param storeDTO storeDTO
   * @return OK
   */
  updateStoreUsingPUTResponse(storeDTO: StoreDTO): __Observable<__StrictHttpResponse<StoreDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = storeDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/stores`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StoreDTO>;
      })
    );
  }
  /**
   * @param storeDTO storeDTO
   * @return OK
   */
  updateStoreUsingPUT(storeDTO: StoreDTO): __Observable<StoreDTO> {
    return this.updateStoreUsingPUTResponse(storeDTO).pipe(
      __map(_r => _r.body as StoreDTO)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getStoreUsingGETResponse(id: number): __Observable<__StrictHttpResponse<StoreDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stores/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StoreDTO>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getStoreUsingGET(id: number): __Observable<StoreDTO> {
    return this.getStoreUsingGETResponse(id).pipe(
      __map(_r => _r.body as StoreDTO)
    );
  }

  /**
   * @param id id
   */
  deleteStoreUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/stores/${id}`,
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
  deleteStoreUsingDELETE(id: number): __Observable<null> {
    return this.deleteStoreUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module StoreResourceService {
}

export { StoreResourceService }
