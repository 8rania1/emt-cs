import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../emt-schema';

@Injectable({
    providedIn: 'root',
})
export class UserSessionService {

    private resource: string = `${environment.url}/whoami`;
    constructor(private httpClient: HttpClient,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService, private router: Router) { }

    auth(credential: { email: string, password: string }) {
        this.spinner.show();
        return this.httpClient.get<User>(this.resource, { headers: { authorization: this.basicAuthToken(credential.email, credential.password) } }).subscribe({
            next: (user: User) => {
                sessionStorage.setItem('password', credential.password)
                sessionStorage.setItem('user', JSON.stringify(user));
                this.router.navigate(['/dashboard']);
            }
            , error: (err: any) => { this.toastr.error('Invalid email or password', 'Authentification failed'); this.spinner.hide(); }
            , complete: () => this.spinner.hide()
        });
    }
    logout() {
        sessionStorage.removeItem('password'); sessionStorage.removeItem('user');
        this.router.navigate(['/']);
    }

    user(): User | null {
        const data: string | null = sessionStorage.getItem('user');
        if (data) {
            return JSON.parse(data) as User;
        }
        return null;


    }

    basicAuthToken(email: string, password: string): string {
        return 'Basic ' + window.btoa(email + ":" + password)

    }



}
