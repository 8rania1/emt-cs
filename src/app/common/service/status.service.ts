import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movement, Status, User } from '../emt-schema';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private url: string = `${environment.url}/status`;
  constructor(private httpClient: HttpClient) {}

  save(movement: Status): Observable<Status> {
    return this.httpClient.post<Status>(this.url, movement);
  }
  collection(direction: string | undefined = undefined): Observable<Status[]> {
    let params = new HttpParams();
    if (direction) {
      params = params.set('direction', direction);
    }
    return this.httpClient.get<Status[]>(this.url, { params: params });
  }
}
