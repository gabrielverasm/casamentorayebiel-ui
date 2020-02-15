import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { Produto } from '../models/Produto';
import { ItemCarrinho, Carrinho } from '../carrinho/carrinho';
import { Pagamento } from './pagamento';
import { PagamentoService } from './pagamento.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  items: ItemCarrinho[];
  carrinho: Carrinho;
  pagamento: Pagamento = new Pagamento();
  mensagem: string;
  errors = [];

  constructor(
    private carrinhoService: CarrinhoService, 
    private pagamentoService: PagamentoService) { }

  ngOnInit() {
    this.carrinho = this.carrinhoService.obterCarrinho();
    this.items = this.carrinhoService.obterItems();
    this.calculaTotal();
  }

  calculaTotal(){
    let valorTotal: number = 0.0;
    const newItems = this.items.filter(item => item.quantidade > 0);
    newItems.forEach(item => {
      valorTotal = valorTotal + (item.quantidade * item.presente.valor);
    })
    this.items = newItems;
    this.carrinhoService.atualizaCarrinho(this.items);     
    this.carrinho.total = valorTotal;            
  }

  limpar(){
    this.carrinhoService.limparCarrinho();
    this.carrinho = this.carrinhoService.obterCarrinho();
    this.pagamento = new Pagamento();
  }

  onSubmit(event: any){
    event.preventDefault();
    if(this.pagamento.isDeposito()){
      this.pagamentoService
        .submeterDeposito(this.carrinho)
        .subscribe(response => {
          this.mensagem = "Deposito Registrado com sucesso!";
          this.errors = []
          this.limpar();
        },error => {
          this.mensagem = null;
          if(error.error){
            this.errors = error.error;
          }
        })

    }else {
      this.pagamentoService
        .submeterPagamento(this.pagamento, this.carrinho)
        .subscribe(response => {
           this.mensagem = "Pagamento Realizado com sucesso!";
           this.limpar();
         },error => {
          this.mensagem = null;
          if(error.error){
            this.errors = error.error;
          }
        });
    }
  }


}
