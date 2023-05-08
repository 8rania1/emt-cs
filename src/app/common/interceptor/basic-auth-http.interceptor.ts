import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../emt-schema';

@Injectable()
export class BasicAuthHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const data: string | null = sessionStorage.getItem("user");
        const password: string | null = sessionStorage.getItem("password");
        if (data && password && req.url.indexOf('whoami') === -1) {
            const user: User = JSON.parse(data) as User;
            const authReq = req.clone({
                headers: new HttpHeaders({
                    'Authorization': `Basic ${window.btoa(user.email + ":" + password)}`
                })
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}