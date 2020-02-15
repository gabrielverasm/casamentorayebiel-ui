import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';
import { Carrinho, ItemCarrinho } from './carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }

  adicionaItem(produto: Produto){
    const carrinho = this.obterCarrinho();
    const itemCarrinho = new ItemCarrinho();
    itemCarrinho.presente = produto;
    itemCarrinho.quantidade = 1;
    if(!carrinho.items){
      carrinho.items = []
    }
    carrinho.items.push(itemCarrinho);
    localStorage.setItem('_carrinho', JSON.stringify(carrinho))
  }

  atualizaCarrinho(items: ItemCarrinho[]){
    const carrinho: Carrinho = this.obterCarrinho();
    carrinho.items = items;
    localStorage.setItem('_carrinho', JSON.stringify(carrinho))
  }

  obterItems() : ItemCarrinho[] {
    const carrinho: Carrinho = this.obterCarrinho();
    if(!carrinho.items){
      carrinho.items = new Array<ItemCarrinho>();
    }

    return carrinho.items;
  }

  limparCarrinho(){
    localStorage.removeItem('_carrinho');
  }

  obterCarrinho() : Carrinho{
    const carrinho = '_carrinho';
    const storage = localStorage.getItem('_carrinho')

    if(!storage){
      const newCarrinho = new Carrinho();
      newCarrinho.items = new Array<ItemCarrinho>();
      localStorage.setItem(carrinho, JSON.stringify(newCarrinho));
      return newCarrinho;
    }else{
      return JSON.parse(storage);
    }
  }
}
