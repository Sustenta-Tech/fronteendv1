import React, { useContext } from 'react';
import Produto from '../../models/Produto';
import { CarrinhoContext } from '../../store/carrinhocontext/CarrinhoContext';
import './Carrinho.css'
import { Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { main } from '@popperjs/core';

interface CarrinhoProps {
  produtosNoCarrinho: Produto[];
}

function Carrinho() {
  const { produtosNoCarrinho } = useContext(CarrinhoContext);

  return (
    <main className='bodycar'>
      <h2 className='tituloCarrinho'>Carrinho de Compra</h2>

      {produtosNoCarrinho.length === 0 ? (
        <p className='infoCarrinho'>O carrinho está vazio</p>
      ) : (
        // <ul>
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Produto</b></TableCell>
                  <TableCell><b>Preço</b></TableCell>
                  <TableCell><b>Quantidade</b></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {produtosNoCarrinho.map((produto) => (
                  <TableRow key={produto.id}>
                    <TableCell>
                      <Box display='flex' alignItems='center'>
                        <img src={produto.foto} alt='imagem do produto' style={{ width: '50px', marginRight: '10px' }} />
                        <Typography variant='body1'>{produto.nome}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>R${produto.preco},00</TableCell>
                    <TableCell>{produto.quantidade}</TableCell>
                    <TableCell>
                      <Button variant='contained' color='secondary'>
                        Remover
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box mt={2} display='flex' justifyContent='flex-end'>
            <Button variant='contained' color='primary'>
              Finalizar Compra
            </Button>
          </Box>
        </>
      )}
    </main>
  );
}

export default Carrinho;
