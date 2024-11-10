import { Entidade } from "../core/Entidade";

interface ProdutoProps {
    id?: string;
    nome: string;
    preco: number;
    descricao: string;
    quantidade: number;
    quantidadeMinima: number;
    quantidadeMaxima: number;
    tamanho: string;
    cor: string;
    categoriaId: string;
    fornecedorId: string;
    createdAt: Date;
    updatedAt?: Date;
}

export class Produto extends Entidade<ProdutoProps> {

}