import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagamento, Compra } from './pagamento';
import { Observable } from 'rxjs';
import { Carrinho } from '../carrinho/carrinho';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl =  environment.apiUrl + '/carrinhos';
  }

  submeterPagamento(pagamento: Pagamento, carrinho: Carrinho) : Observable<any>{
    const compra = new Compra(pagamento, carrinho);
    return this.http.post<any>(this.apiUrl, compra);
  }

  submeterDeposito(carrinho: Carrinho){
    const url = `${this.apiUrl}/deposito`
    return this.http.post<any>(url, carrinho);
  }
}
