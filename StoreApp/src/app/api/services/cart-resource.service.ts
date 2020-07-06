/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CartDTO } from '../models/cart-dto';

/**
 * Cart Resource
 */
@Injectable({
  providedIn: 'root',
})
class CartResourceService extends __BaseService {
  static readonly getAllCartsUsingGETPath = '/api/carts';
  static readonly createCartUsingPOSTPath = '/api/carts';
  static readonly updateCartUsingPUTPath = '/api/carts';
  static readonly getCartUsingGETPath = '/api/carts/{id}';
  static readonly deleteCartUsingDELETEPath = '/api/carts/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllCartsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<CartDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/carts`,
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
   * @return OK
   */
  getAllCartsUsingGET(): __Observable<Array<CartDTO>> {
    return this.getAllCartsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<CartDTO>)
    );
  }

  /**
   * @param cartDTO cartDTO
   * @return OK
   */
  createCartUsingPOSTResponse(cartDTO: CartDTO): __Observable<__StrictHttpResponse<CartDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = cartDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/carts`,
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
   * @param cartDTO cartDTO
   * @return OK
   */
  createCartUsingPOST(cartDTO: CartDTO): __Observable<CartDTO> {
    return this.createCartUsingPOSTResponse(cartDTO).pipe(
      __map(_r => _r.body as CartDTO)
    );
  }

  /**
   * @param cartDTO cartDTO
   * @return OK
   */
  updateCartUsingPUTResponse(cartDTO: CartDTO): __Observable<__StrictHttpResponse<CartDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = cartDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/carts`,
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
   * @param cartDTO cartDTO
   * @return OK
   */
  updateCartUsingPUT(cartDTO: CartDTO): __Observable<CartDTO> {
    return this.updateCartUsingPUTResponse(cartDTO).pipe(
      __map(_r => _r.body as CartDTO)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getCartUsingGETResponse(id: number): __Observable<__StrictHttpResponse<CartDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/carts/${id}`,
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
   * @param id id
   * @return OK
   */
  getCartUsingGET(id: number): __Observable<CartDTO> {
    return this.getCartUsingGETResponse(id).pipe(
      __map(_r => _r.body as CartDTO)
    );
  }

  /**
   * @param id id
   */
  deleteCartUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/carts/${id}`,
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
  deleteCartUsingDELETE(id: number): __Observable<null> {
    return this.deleteCartUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CartResourceService {
}

export { CartResourceService }
