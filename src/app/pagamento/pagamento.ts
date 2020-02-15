import { Carrinho } from '../carrinho/carrinho';

export class Pagamento {
    forma: string = 'deposito';
    nome: string;
    cpf: string;
    email: string;
    quantidadeParcelas: number = 1;
    cartao: Cartao = new Cartao();

    isDeposito() : boolean {
        return this.forma && this.forma === 'deposito';
    }
}

export class Cartao {
    bandeira: string;
    codigoSeguranca: string;
    numero: string;
    titular: string;
    validade: string;
}

export class Compra {
   constructor(
    public pagamento: Pagamento,
    public carrinho: Carrinho
   ){}
}