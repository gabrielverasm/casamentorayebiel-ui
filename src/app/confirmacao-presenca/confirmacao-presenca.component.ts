import { Component } from '@angular/core';
import { Confirmacao } from './confirmacao';
import { ConfirmacaoService } from './confirmacao.service';


@Component({
  selector: 'app-confirmacao-presenca',
  templateUrl: './confirmacao-presenca.component.html',
  styleUrls: ['./confirmacao-presenca.component.css']
})
export class ConfirmacaoPresencaComponent {

  confirmacao: Confirmacao = new Confirmacao();
  mensagem: string;

  constructor(private service: ConfirmacaoService){}

  onSubmit(event: any){
    event.preventDefault();
    this.service
      .confirmar(this.confirmacao)
      .subscribe(data => {
        this.mensagem = "Presença confirmada com sucesso, "+ this.confirmacao.nome + ", te aguardamos.";
        this.confirmacao = new Confirmacao();
      })
  }
}
