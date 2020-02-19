import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Confirmacao } from './confirmacao';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacaoService {

  apiUrl: string;
 
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl + "/presencas";
  }

  confirmar(confirmacao: Confirmacao) {
    return this.http.post<Confirmacao>(this.apiUrl, confirmacao);
  }
}
