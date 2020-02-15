import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagamento, Compra } from './pagamento';
import { Observable } from 'rxjs';
import { Carrinho } from '../carrinho/carrinho';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  //apiUrl: string = "https://casamento-raybiel-api.herokuapp.com/api/carrinhos";
  apiUrl: string = "http://localhost:8080/api/carrinhos";

  constructor(private http: HttpClient) { }

  submeterPagamento(pagamento: Pagamento, carrinho: Carrinho) : Observable<any>{
    const compra = new Compra(pagamento, carrinho);
    return this.http.post<any>(this.apiUrl, compra);
  }

  submeterDeposito(carrinho: Carrinho){
    const url = `${this.apiUrl}/deposito`
    return this.http.post<any>(url, carrinho);
  }
}
