import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movement, Reason, User } from '../emt-schema';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ReasonService {
  private url: string = `${environment.url}/reason`;
  constructor(private httpClient: HttpClient) {}

  save(movement: Reason): Observable<Reason> {
    return this.httpClient.post<Reason>(this.url, movement);
  }
  reasons(direction: string): Observable<Reason[]> {
    const params = new HttpParams().set('direction', direction);
    return this.httpClient.get<Reason[]>(this.url, { params: params });
  }
}
