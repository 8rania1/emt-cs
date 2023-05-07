import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Equipment, User } from '../emt-schema';
import { environment } from 'src/environments/environment.development';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  private resource: string = `${environment.url}/equipment`;
  constructor(private httpClient: HttpClient) { }

  save(equipment: Equipment): Observable<Equipment> {
    return this.httpClient.post<Equipment>(this.resource, equipment);
  }

  equipments(page: number = 0, size: number = 10, field: string = '', direction: string = 'asc'): Observable<Page<Equipment>> {
    const param = new HttpParams().set('page', page).set('size', size).set('sort', `${field},${direction}`);
    return this.httpClient.get<Page<Equipment>>(this.resource);
  }

  search(serialNumber: string = 'asc'): Observable<Equipment[]> {
    const params = new HttpParams().set('serialNumber', serialNumber);
    return this.httpClient
      .get<Equipment[]>(this.resource, { params: params })
      .pipe(map((data: any) => data.content));
  }

  equipment(serialNumber: string): Observable<Equipment> {
    return this.httpClient
      .get<Equipment>(`${this.resource}/${serialNumber}`);
  }
}
