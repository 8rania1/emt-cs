import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Supplier, User } from '../emt-schema';
import { environment } from 'src/environments/environment.development';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private resource: string = 'supplier';
  constructor(private httpClient: HttpClient) { }

  create(supplier: any):Observable<Supplier> {
    return this.httpClient.post<Supplier>(`${environment.url}/${this.resource}`,supplier);

  }
  suppliers(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(`${environment.url}/${this.resource}`);
  }




}