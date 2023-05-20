import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category, User } from '../emt-schema';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url: string = `${environment.url}/category`;

  constructor(private httpClient: HttpClient) {}

  save(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.url, category);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  categories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.url);
  }
}
