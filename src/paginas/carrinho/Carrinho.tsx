import React from 'react';
import './Carrinho.css';

const Carrinho: React.FC = () => {
  return (
    <>
      <main className='bodycar'>
        <nav>
          <h2>Carrinho de Compra</h2>
        </nav>
        <section>
          <div className='card'>
            <img src='https://imgur.com/T8eGcsh.png' alt='refletorsolar' />
            <h1>Refletor de LED e energia solar</h1>
            <h1>Preço: R$ 239,00</h1>
            <button>Remover</button>
          </div>
          <div className='card'>
            <img src='' alt='' />
            <h1>Produto 2</h1>
            <h1>Preço: R$ 00,00</h1>
            <button>Remover</button>
          </div>
          <div className='card'>
            <img src='' alt='' />
            <h1>Produto 3</h1>
            <h1>Preço: R$ 00,00</h1>
            <button>Remover</button>
          </div>
        </section>
        <footer>
          <ul>
            <li>
              <span>Valor Total: R$00,00</span>
              <button>Finalizar</button>
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
};

export default Carrinho;
