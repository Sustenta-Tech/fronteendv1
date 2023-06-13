import React, { createContext, useState, useContext } from 'react';
import Produto from '../../models/Produto';

interface CarrinhoContextData {
    produtosNoCarrinho: Produto[];
    adicionarAoCarrinho: (produto: Produto) => void;
}

export const CarrinhoContext = createContext<CarrinhoContextData>({
    produtosNoCarrinho: [],
    adicionarAoCarrinho: () => { },
});

export const CarrinhoProvider: React.FC = ({ children }) => {
    const [produtosNoCarrinho, setProdutosNoCarrinho] = useState<Produto[]>([]);

    const adicionarAoCarrinho = (produto: Produto) => {
        const produtoExistente = produtosNoCarrinho.find((p) => p.id === produto.id);

        if (produtoExistente) {
            const produtosAtualizados = produtosNoCarrinho.map((p) => {
                if (p.id === produto.id) {
                    return {
                        ...p,
                        quantidade: p.quantidade + 1,
                    };
                }
                return p;
            });

            setProdutosNoCarrinho(produtosAtualizados);
        } else {
            const novoProduto: Produto = {
                ...produto,
                quantidade: 1,
            };

            setProdutosNoCarrinho([...produtosNoCarrinho, novoProduto]);
        }
    };

    return (
        <CarrinhoContext.Provider value={{ produtosNoCarrinho, adicionarAoCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};

export default CarrinhoProvider;
