import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movement, Reason, User } from '../emt-schema';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private url: string = `${environment.url}/notification`;
  constructor(private httpClient: HttpClient) {}

  notifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.url);
  }
}
