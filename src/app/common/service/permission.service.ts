import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Permission, User } from '../emt-schema';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private resource: string = `${environment.url}/permission`;
  constructor(private httpClient: HttpClient) { }



  permissions(): Observable<Permission[]> {
    return this.httpClient.get<Permission[]>(this.resource);
  }


}