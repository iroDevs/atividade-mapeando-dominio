import { Entidade } from "../core/Entidade";

interface FornecedorProps {
    id?: string;
    cpf?: string;
    cnpj?: string;
    nome: string;
    telefone: string;
    email: string;
    createdAt: Date;
    updatedAt?: Date;
}

export class Fornecedor extends Entidade<FornecedorProps> {

}