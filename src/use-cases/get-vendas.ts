import { Vendas } from "../domains/Vendas";
import { VendasRepository } from "../repositories/VendasRepository";

export class GetVendas {
  constructor(private readonly vendasRepository: VendasRepository) {}

  async execute(): Promise<Vendas[]> {
    return this.vendasRepository.findAll();
  }
}