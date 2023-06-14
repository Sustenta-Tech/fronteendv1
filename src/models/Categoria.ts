import Produto from "./Produto";

interface Categoria{
    id: number;
    tipo: string;
    descricao: string;
    produto?: Produto[] | null;
}

export default Categoria;