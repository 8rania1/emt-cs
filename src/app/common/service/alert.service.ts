import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Alert, Movement, Status, User } from '../emt-schema'
import { environment } from 'src/environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private resource: string = `${environment.url}/alert`
  constructor(private httpClient: HttpClient) {}

  collection(): Observable<Alert[]> {
    return this.httpClient.get<Alert[]>(this.resource)
  }
}
