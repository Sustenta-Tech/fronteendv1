import React, { useEffect, useState } from 'react';
import './Carrinho.css'
import PaginaTitulo from './paginaTitulo/PaginaTitulo';
import PaginaCabecalho from './paginaCabecalho/PaginaCabecalho';
import TabelaRolagem from './tabelaRolagem/TabelaRolagem';
import Sumario from './sumario/Sumario';
import { api } from '../../services/Service';
import ListaProdutos from '../../components/produtos/listaproduto/ListaProdutos';

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  const productObejct = {
    name: 'produto',
    category: 'categoria',
    price: randomNumber(100, 1200),
    quantity: 1,
  }

  const fetchData = () => {
    api.get('/produtos').then((response) => setCarrinho(response.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddItem = () => {
    api.post('/produtos', productObejct).then((response) => {
      console.log(response);
      fetchData();
    });
  };

  const handleRemoveItem = (item) => {
    console.log({ item });

    api.delete(`/produtos/${item._id}`).then((response) => {
      console.log(response);
      fetchData();
    });
  };

  const handleUpdateItem = (item, action) => {
    console.log({ item });
    let newQuantity = item.quantity;

    if (action === 'increase') {
      if (newQuantity === 1) {
        return;
      }
      newQuantity -= 1;

    }
    if (action === 'decrease') { }
    newQuantity += 1;

    const newData = { ...item, quantity: newQuantity }
    delete newData._id;
    console.log({newData})

    api.put(`/produtos/${item._id}`, newData).then((resposnse) => {
      console.log({ resposnse });
      fetchData();
    })

  };

  const getTotal = () => {
    let sum = 0;
    console.log('get total')

    for (let item of carrinho){
      sum += item.price * item.quantity;
    }

    return sum;
  }

 const cartTotal = getTotal();

  return (
    <>
      <PaginaCabecalho />
      <main>
        <PaginaTitulo data={'Seu carrinho'} />
        <div className='content'>
          <section>
            <button onClick={handleAddItem} style={{ padding: '5px 10px', marginBottom: 15, backgroundColor: 'blue' }}>Add to cart</button>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {carrinho.map((item) => (
                  <TabelaRolagem key={item._id} data={item}
                    handleRemoveItem={handleRemoveItem}
                    handleUpdateItem={handleUpdateItem}
                  />
                ))}
                {carrinho.length === 0 && (
                  <tr>
                    <td style={{ textAlign: 'center' }}>
                      <b>Carrinho de Compras Vazio</b>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </section>
          <aside>
            <Sumario total={cartTotal} />
          </aside>
        </div>
      </main>
    </>
  );
}

export default Carrinho;
