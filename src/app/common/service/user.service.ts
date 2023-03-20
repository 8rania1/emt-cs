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
  private resource: string = 'user';
  constructor(private httpClient: HttpClient) { }

  save() {
  }

  users(page: number = 0, size: number = 10, field: string = '', direction: string = 'asc'): Observable<Page<User>> {
    const param = new HttpParams().set('page', page).set('size', size).
      set('sort', `${field},${direction}`)
    return this.httpClient.get<Page<User>>(`${environment.url}/${this.resource}`);
  }


}