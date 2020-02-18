import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Confirmacao } from './confirmacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacaoService {

//  apiUrl = 'https://casamento-raybiel-api.herokuapp.com/api/presencas';

  apiUrl = 'http://localhost:8080/api/presencas';
 
  constructor(private http: HttpClient) { }

  confirmar(confirmacao: Confirmacao) {
    return this.http.post<Confirmacao>(this.apiUrl, confirmacao);
  }
}
