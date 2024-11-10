import { Entidade } from "../core/Entidade";
import { UniqueIdType } from "../core/utils/unique-id-type";
import { Vendas } from "./Vendas";

export type FiltroVendas = {
    dataInicio?: Date;
    dataFim?: Date;
    produtoId?: string;
    clienteId?: string;
    metodo_pagamento?: string;
}

export interface HistoricoVendasProps {
    id?: UniqueIdType;
    createdAt: Date;
    updatedAt?: Date;
}

export class HistoricoVendas extends Entidade<HistoricoVendasProps> {
    private vendas: Vendas[];

    constructor(props: HistoricoVendasProps) {
        super(props, new UniqueIdType());
        this.vendas = [];
    }

    public addVenda(venda: Vendas): void {
        this.vendas.push(venda);
    }

    public getVendasByFiltro(filtro: FiltroVendas): Vendas[] {
        return this.vendas.filter(venda => {
            return (!filtro.dataInicio || venda.getProps().createdAt >= filtro.dataInicio) &&
                (!filtro.dataFim || venda.getProps().createdAt <= filtro.dataFim) &&
                (!filtro.produtoId || venda.getProps().produtoId === filtro.produtoId) &&
                (!filtro.clienteId || venda.getProps().clienteId === filtro.clienteId) &&
                (!filtro.metodo_pagamento || venda.getProps().metodo_pagamento === filtro.metodo_pagamento);
        });
    }
}
