import { HistoricoVendas } from "../domains/HistoricoVendas";
import { Vendas } from "../domains/Vendas";
import { VendasRepository } from "../repositories/VendasRepository";

export class GetVendas {
  constructor(private readonly vendasRepository: VendasRepository) {}

  async execute(): Promise<Vendas[]> {
    const historicoVendas = new HistoricoVendas({
        id: "historico1",
        vendas: vendas,  // vendas seria uma lista de objetos do tipo Vendas
        createdAt: new Date(),
        updatedAt: new Date(),
    });
       
       
  }
}