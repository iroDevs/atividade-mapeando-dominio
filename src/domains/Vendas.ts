import { Entidade } from "../core/Entidade";

export enum MetodoPagamento {
    DINHEIRO = "DINHEIRO",
    CARTAO = "CARTAO",
    PIX = "PIX"
}

interface ProdutoProps {
    id?: string;
    clienteId: string;
    produtoId: string;
    quantidade: number;
    valor_pago: number;
    metodo_pagamento: MetodoPagamento;

    createdAt: Date;
    updatedAt?: Date;

}

export class Vendas extends Entidade<ProdutoProps> {

}