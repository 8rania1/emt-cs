import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification } from '../emt-schema';
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

  read(notification:Notification): Observable<void> {
    return this.httpClient.put<void>(`${this.url}`,notification);
  }

}
