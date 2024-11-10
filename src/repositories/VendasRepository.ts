import { Vendas } from "../domains/Vendas";

export class VendasRepository {
  async findAll(): Promise<Vendas[]> {
    return [];
  }
}