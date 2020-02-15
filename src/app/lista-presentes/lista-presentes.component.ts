import { Produto } from './../models/Produto';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-lista-presentes',
  templateUrl: './lista-presentes.component.html',
  styleUrls: ['./lista-presentes.component.css']
})
export class ListaPresentesComponent implements OnInit {

  Produtos = [
    new Produto('../../assets/img/cueca.png', 'Compre uma cueca nova para o Gabriel impressionar na lua de mel.', 'lua de mel', 50),
    new Produto('../../assets/img/luademel.jpg', 'Uma cota para a lua de mel dos noivos.', 'lua de mel', 500),
    new Produto('../../assets/img/lingerie.jpg', 'Lingerie para a Rayane arrasar na lua de mel.', 'lua de mel', 110),
    new Produto('../../assets/img/jantar.png', 'Garanta um jantar romântico para os noivos na lua de mel.', 'lua de mel', 300),
    new Produto('../../assets/img/ressaca.jpeg', 'Garanta a lua de mel comprando um kit ressaca.', 'lua de mel', 33.70),
    new Produto('../../assets/img/malas.jpg', 'Conjunto de malas para a viagem mais especial de nossas vidas.', 'lua de mel', 873.69),
    new Produto('../../assets/img/biquini.jpg', 'Uma roupa de banho para os noivos.', 'lua de mel', 165.40),
    new Produto('../../assets/img/uber.jpg', 'Uber para ida e volta do aeroporto.', 'lua de mel', 86.47),
    new Produto('../../assets/img/lancha.jpg', 'Garanta um passeio de lancha para o casal na lua de mel.', 'lua de mel', 280),
    new Produto('../../assets/img/champagne.jpg', 'Comemorar nosso casamento com champagne e a beira mar.', 'lua de mel', 167.00),
    new Produto('../../assets/img/frigideira.jpg', 'Frigideira anti aderente MaxChef.', 'casa', 159.99),
    new Produto('../../assets/img/tv.jpg', 'Smart TV LG 50 polegadas 4K.', 'casa', 2099.90),
    new Produto('../../assets/img/mesa.jpg', 'Mesa para notebook.', 'casa', 450.00),
    new Produto('../../assets/img/aprjantar.jpg', 'Aparelho Jantar.', 'casa', 579.90),
    new Produto('../../assets/img/jglencol.jpg', 'Jogo de lençol 200 fios.', 'casa', 300),
    new Produto('../../assets/img/colchao.jpg', 'Colchão Queen.', 'casa', 1000),
    new Produto('../../assets/img/arcon.jpg', 'Ar condicionado 9.000btus Midea.', 'casa', 1500),
    new Produto('../../assets/img/panelas.jpg', 'Jogo de panelas.', 'casa', 350),
    new Produto('../../assets/img/cadeiras.jpg', 'Cadeiras p/ varanda.', 'casa', 450),
    new Produto('../../assets/img/travesseiros.jpg', 'Travesseiros.', 'casa', 200),
    new Produto('../../assets/img/utensilios.png', 'Utensílios de cozinha.', 'casa', 180),
    new Produto('../../assets/img/suporte.jpg', 'Suporte de TV.', 'casa', 150),
    new Produto('../../assets/img/box.jpg', 'Box de vidro do banheiro.', 'casa', 800),
    new Produto('../../assets/img/varal.jpg', 'Super varal em inox de chão.', 'casa', 169),
    new Produto('../../assets/img/som.jpg', 'Caixa de som para fazermos a festa lá em casa.', 'casa', 879.90),
    new Produto('../../assets/img/jgtacas.jpg', 'Jogo de taças.', 'casa', 90),
    new Produto('../../assets/img/marinex.png', 'Conjunto de marinex.', 'casal', 179.90),
    new Produto('../../assets/img/compras.jpg', 'Ajude nas primeiras comprinhas de nossa casa.', 'casal', 460),
    new Produto('../../assets/img/toalhas.jpg', 'Jogo de toalhas para o casal.', 'casal', 230),
    new Produto('../../assets/img/massagem.jpg', 'Massagem relaxante para a noiva ficar mais calma para o casamento.',
      'casal', 150),
    new Produto('../../assets/img/leao.jpg', 'Camisa do Fortaleza para o noivo ficar se achando.', 'casal', 140),
    new Produto('../../assets/img/disney.jpg', 'Conjunto da disney para a noiva ficar se achando também.', 'casal', 159.90),
    new Produto('../../assets/img/hotel.jpg',
      'Diária em uma pousada porreta, para uma pequena viagem após a lua de mel.', 'casal', 347.90),
    new Produto('../../assets/img/picnic.jpg', 'Garanta um piquenique romântico para os recém casado no cocó.', 'casal', 90),
    new Produto('../../assets/img/joia.jpg', 'Compre uma jóia arretada pra essa noiva linda.', 'casal', 236.74),
    new Produto('../../assets/img/presele.jpg', 'Um mimo para o gabriel.', 'casal', 77.55),
    new Produto('../../assets/img/presente.jpg', 'Uma lembrancinha para Rayane.', 'casal', 79.48),

  ];

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

  adicionarProduto(produto: Produto){
    this.carrinhoService.adicionaItem(produto);
  }

}
