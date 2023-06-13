import React, { useContext } from 'react';
import Produto from '../../models/Produto';
import { CarrinhoContext } from '../../store/carrinhocontext/CarrinhoContext';
import './Carrinho.css'

interface CarrinhoProps {
  produtosNoCarrinho: Produto[];
}

function Carrinho() {
  const { produtosNoCarrinho } = useContext(CarrinhoContext);

  return (
    <main className='bodycar'>
      <h2 className='tituloCarrinho'>Carrinho de Compra</h2>
      {produtosNoCarrinho.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        // <ul>
        <>
          {produtosNoCarrinho.map((produto) => (

            <div key={produto.id} className='card'>
              <img src={`${produto.foto}`} alt='imagem do produto' referrerPolicy="no-referrer" />
              <h1>{produto.nome}</h1>
              <h1>R${produto.preco},00</h1>
              <h1>Quantidade: {produto.quantidade}</h1>
              <button>Remover</button>
            </div>
          ))}
            <section className='sectionTotalCar'>
                    <ul>
                        <li>
                            {/* <span>Valor Total:      R$ 86,00</span> */}
                            <button>Finalizar Compra</button>
                        </li>
                    </ul>
                </section>
        </>
      )}
    </main>
  );
}

export default Carrinho;
