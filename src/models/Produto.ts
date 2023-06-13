import Categoria from "./Categoria";

interface Produto{
    _id: any;
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    descricao: string;
    foto?: string | null;
    categoria?: Categoria | null
}

export default Produto;