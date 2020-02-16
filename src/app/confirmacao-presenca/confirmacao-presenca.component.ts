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
  errors = [];

  constructor(private service: ConfirmacaoService) { }

  onSubmit(event: any) {
    event.preventDefault();
    this.service
      .confirmar(this.confirmacao)
      .subscribe(data => {
        this.mensagem = 'Presença confirmada com sucesso, ' + this.confirmacao.nome + ', te aguardamos.';
        this.errors = [];
        this.confirmacao = new Confirmacao();
      }, error => {
        this.mensagem = null;
        if (error.error) {
          this.errors = error.error;
        }
      });

  }
}
