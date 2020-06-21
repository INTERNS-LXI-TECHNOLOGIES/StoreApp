import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('api/authenticate')) {
      return next.handle(req);
    }
    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
        'Access-Control-Allow-Origin': 'http://localhost:8080/',
      }),
    });

    console.log('Intercepted HTTP call', authReq);
    console.log(req.url);
    return next.handle(authReq);
  }
}
