import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Filter, Movement, User } from '../emt-schema'
import { environment } from 'src/environments/environment.development'
import { Page } from '../model/page'
import { JsonPipe, formatDate } from '@angular/common'

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  private resource: string = `${environment.url}/movement`
  constructor(private httpClient: HttpClient) {}

  save(movement: Movement): Observable<Movement> {
    return this.httpClient.post<Movement>(this.resource, movement)
  }

  directions(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.resource}/direction`)
  }

  movementss(page: number = 0, size: number = 10, field: string = '', direction: string = 'asc'): Observable<Page<Movement>> {
    const param = new HttpParams().set('page', page).set('size', size).set('sort', `${field},${direction}`)
    return this.httpClient.get<Page<Movement>>(this.resource)
  }

  movements(serialNumber: string | null = null): Observable<Movement[]> {
    let params = new HttpParams()
    if (serialNumber) {
      params = params.set('serialNumber', serialNumber)
    }
    return this.httpClient.get<Movement[]>(this.resource, { params: params })
  }

  download(filter: Filter | null) {
    let params = new HttpParams()
    if (filter && filter.equipment) {
      params = params.set('serialNumber', filter.equipment.serialNumber)
    }
    if (filter && filter.startDate && filter && filter.endDate) {
      params = params.set('startDate', formatDate(filter.startDate, "yyyy-MM-dd'T'HH:mm:ss", 'en-US')).set('endDate', formatDate(filter.endDate, "yyyy-MM-dd'T'HH:mm:ss", 'en-US'))
    }
    return this.httpClient.get(`${this.resource}/download`, {
      responseType: 'blob',
      params: params,
    })
  }

  filter(filter: Filter): Observable<Movement[]> {
    let params = new HttpParams()
    if (filter.equipment) {
      params = params.set('serialNumber', filter.equipment.serialNumber)
    }
    if (filter.startDate && filter.endDate) {
      params = params.set('startDate', formatDate(filter.startDate, "yyyy-MM-dd'T'HH:mm:ss", 'en-US')).set('endDate', formatDate(filter.endDate, "yyyy-MM-dd'T'HH:mm:ss", 'en-US'))
    }
    return this.httpClient.get<Movement[]>(`${this.resource}/search`, { params: params })
  }
}
