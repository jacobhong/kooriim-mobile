import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeycloakService } from '../keycloak/keycloak.service';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';


@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private keycloak: KeycloakService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercepting');
        // add authorization header with jwt token if available
        // if (currentAuthToken && currentAuthToken.token) {
        //     const headers = {
        //         'Authorization': `Bearer ${currentAuthToken.token}`,
        //     };
        //     if (request.responseType === 'json') {
        //         headers['Content-Type'] = 'application/json';
        //     }
        //     request = request.clone({
        //         setHeaders: headers
        //     });
        // }

        let apiReq;
        if (req.url.indexOf('public-gallery') !== -1) {
            // apiReq = req.clone({ url: `${environment.routes.baseUrl}/${req.url}` });
        } else {
            let r = new HttpHeaders();
            r = r.append('Authorization', 'Bearer ' + this.keycloak.getToken() || '');
            // if (req.url.indexOf('auth') !== -1) {
            //     apiReq = req.clone({ headers: r, url: `${environment.routes.auth}/${req.url}` });
            // } else if (req.url.indexOf('assets') !== -1) {
            //     apiReq = req.clone({ headers: r, url: `${environment.routes.assets}/${req.url}` });
            // } else {
            //     apiReq = req.clone({ headers: r, url: `${environment.routes.baseUrl}/${req.url}` });
            // }
        }
        return next.handle(req);
        // return next.handle(request);

    }
}
