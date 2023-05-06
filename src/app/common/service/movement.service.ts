import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movement, User } from '../emt-schema';
import { environment } from 'src/environments/environment.development';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  private resource: string = `${environment.url}/movement`;
  constructor(private httpClient: HttpClient) { }

  save(movement: Movement): Observable<Movement> {
    return this.httpClient.post<Movement>(this.resource, movement);
  }

  directions(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.resource}/direction`);
  }

  movements(page: number = 0, size: number = 10, field: string = '', direction: string = 'asc'): Observable<Page<Movement>> {
    const param = new HttpParams().set('page', page)
      .set('size', size).set('sort', `${field},${direction}`);
    return this.httpClient.get<Page<Movement>>(this.resource);
  }
}
