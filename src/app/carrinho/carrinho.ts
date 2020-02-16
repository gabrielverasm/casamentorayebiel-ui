import { Produto } from '../models/Produto';

export class Carrinho {
    convidado: string;
    items: ItemCarrinho[];
    total: number;
}

export class ItemCarrinho {
    presente: Produto;
    quantidade: number;
}
