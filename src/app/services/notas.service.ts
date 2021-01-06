import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notas } from '../model/notas.model';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  
  url: String = 'CaixaEletronica';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Notas[]> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.get<Notas[]>(environment.API + `${this.url}`, { headers: headers, responseType: 'json' });
  }

  public verificarNotasDisponiveis(): Observable<Notas[]> {
    const headers: HttpHeaders = this.getHeaders();
    const url = 'CaixaEletronica/verificar-notas-disponiveis';
    return this.httpClient.get<Notas[]>(environment.API + `${url}`, { headers: headers, responseType: 'json' });
  }

  public getById(id: any): Observable<Notas> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.get<Notas>(environment.API + `${this.url}/${id}`, { headers: headers, responseType: 'json' });
  }

  public create(model: Notas): Observable<Notas> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.post<Notas>(environment.API + `${this.url}`, model, { headers: headers, responseType: 'json' });
  }

  public update(model: Notas): Observable<Notas> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.put<Notas>(environment.API + `${this.url}`, model, { headers: headers, responseType: 'json' });
  }

  public delete(model: Notas): Observable<Notas> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.delete<Notas>(environment.API + `${this.url}` + '/' + model, { headers: headers, responseType : 'json'});
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('content-type', 'application/json');
  }
}
