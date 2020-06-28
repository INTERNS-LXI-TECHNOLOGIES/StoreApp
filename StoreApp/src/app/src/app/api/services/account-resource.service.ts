/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDTO } from '../models/user-dto';
import { PasswordChangeDTO } from '../models/password-change-dto';
import { KeyAndPasswordVM } from '../models/key-and-password-vm';
import { ManagedUserVM } from '../models/managed-user-vm';

/**
 * Account Resource
 */
@Injectable({
  providedIn: 'root',
})
class AccountResourceService extends __BaseService {
  static readonly getAccountUsingGETPath = '/api/account';
  static readonly saveAccountUsingPOSTPath = '/api/account';
  static readonly changePasswordUsingPOSTPath = '/api/account/change-password';
  static readonly finishPasswordResetUsingPOSTPath = '/api/account/reset-password/finish';
  static readonly requestPasswordResetUsingPOSTPath = '/api/account/reset-password/init';
  static readonly activateAccountUsingGETPath = '/api/activate';
  static readonly isAuthenticatedUsingGETPath = '/api/authenticate';
  static readonly registerAccountUsingPOSTPath = '/api/register';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAccountUsingGETResponse(): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/account`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDTO>;
      })
    );
  }
  /**
   * @return OK
   */
  getAccountUsingGET(): __Observable<UserDTO> {
    return this.getAccountUsingGETResponse().pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * @param userDTO userDTO
   */
  saveAccountUsingPOSTResponse(userDTO: UserDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account`,
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
   * @param userDTO userDTO
   */
  saveAccountUsingPOST(userDTO: UserDTO): __Observable<null> {
    return this.saveAccountUsingPOSTResponse(userDTO).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param passwordChangeDto passwordChangeDto
   */
  changePasswordUsingPOSTResponse(passwordChangeDto: PasswordChangeDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = passwordChangeDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/change-password`,
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
   * @param passwordChangeDto passwordChangeDto
   */
  changePasswordUsingPOST(passwordChangeDto: PasswordChangeDTO): __Observable<null> {
    return this.changePasswordUsingPOSTResponse(passwordChangeDto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param keyAndPassword keyAndPassword
   */
  finishPasswordResetUsingPOSTResponse(keyAndPassword: KeyAndPasswordVM): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = keyAndPassword;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/reset-password/finish`,
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
   * @param keyAndPassword keyAndPassword
   */
  finishPasswordResetUsingPOST(keyAndPassword: KeyAndPasswordVM): __Observable<null> {
    return this.finishPasswordResetUsingPOSTResponse(keyAndPassword).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param mail mail
   */
  requestPasswordResetUsingPOSTResponse(mail: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = mail;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/reset-password/init`,
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
   * @param mail mail
   */
  requestPasswordResetUsingPOST(mail: string): __Observable<null> {
    return this.requestPasswordResetUsingPOSTResponse(mail).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param key key
   */
  activateAccountUsingGETResponse(key: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (key != null) __params = __params.set('key', key.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/activate`,
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
   * @param key key
   */
  activateAccountUsingGET(key: string): __Observable<null> {
    return this.activateAccountUsingGETResponse(key).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return OK
   */
  isAuthenticatedUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/authenticate`,
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
   * @return OK
   */
  isAuthenticatedUsingGET(): __Observable<string> {
    return this.isAuthenticatedUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param managedUserVM managedUserVM
   */
  registerAccountUsingPOSTResponse(managedUserVM: ManagedUserVM): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = managedUserVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/register`,
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
   * @param managedUserVM managedUserVM
   */
  registerAccountUsingPOST(managedUserVM: ManagedUserVM): __Observable<null> {
    return this.registerAccountUsingPOSTResponse(managedUserVM).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AccountResourceService {
}

export { AccountResourceService }
