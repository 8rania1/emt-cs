import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Chat, User } from '../emt-schema'
import { environment } from 'src/environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private resource: string = `${environment.url}/chat`
  constructor(private httpClient: HttpClient) {}

  categories(): Observable<Map<string, any>> {
    return this.httpClient.get<Map<string, any>>(this.resource)
  }

  send(chat: Chat, recipient: number): Observable<Chat> {
    const params: HttpParams = new HttpParams().set('recipient', recipient)
    return this.httpClient.post<Chat>(`${this.resource}`, chat, { params: params })
  }
}
