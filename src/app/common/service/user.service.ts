import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../emt-schema';
import { environment } from 'src/environments/environment.development';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private resource: string = `${environment.url}/user`;
  constructor(private httpClient: HttpClient) { }

  save(user: User): Observable<User> {
    return this.httpClient.post<User>(this.resource, user);
  }

  users(count: boolean = false): Observable<User[]> {
    const params = new HttpParams().set('count', count);
    return this.httpClient.get<User[]>(this.resource, { params: params });
  }


}