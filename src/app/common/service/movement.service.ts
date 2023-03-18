import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movement, User } from '../emt-schema';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  private url: string = `${environment.url}/movement`;
  constructor(private httpClient: HttpClient) {}

  save(movement: Movement): Observable<Movement> {
    return this.httpClient.post<Movement>(this.url, movement);
  }

  movements(
    page: number,
    size: number,
    field: string,
    direction: string
  ): Observable<Movement[]> {
    const param = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sort', `${field},${direction}`);
    return this.httpClient.get<Movement[]>(this.url);
  }
}
