import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../emt-schema';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private resource: string = `${environment.url}/chart`;
  constructor(private httpClient: HttpClient) { }

  categories(): Observable<Map<string, any>> {
    return this.httpClient.get<Map<string, any>>(this.resource);
  }

  reasons(): Observable<any> {
    return this.httpClient.get<any>(`${environment.url}/chart/reasons`);
  }

}