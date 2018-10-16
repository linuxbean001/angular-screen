import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { UserSessionService } from './user-session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userSessionService: UserSessionService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Add the headers to allow authentication
    if (this.userSessionService.session) {
      request = request.clone({
        headers: request.headers
          .set('X-Session', this.userSessionService.session.apiKey)
      });
    }

    // Handle 401 errors by redirecting to the login page
    return next.handle(request).do((event: HttpEvent<any>) => {}, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    });
  }
}
