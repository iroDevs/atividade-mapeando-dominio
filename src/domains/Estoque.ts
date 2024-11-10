import { Entidade } from "../core/Entidade";
import { UniqueIdType } from "../core/utils/unique-id-type";
import { Produto } from "./Produto";

interface EstoqueProps {
    id?: string;
    preco_total?: number;
    produtos: Produto[];
    createdAt: Date;
    updatedAt?: Date;
}

export class Estoque extends Entidade<EstoqueProps> {

    private calcularPrecoTotal(): number {
        let preco_total = 0;
        this.props.produtos.forEach(produto => {
            preco_total += produto.getProps().preco * produto.getProps().quantidade;
        });
        return preco_total;
    }

    constructor(props: EstoqueProps, id: UniqueIdType) {
        super(props, id);
        this.props.preco_total = this.calcularPrecoTotal();
    }
}