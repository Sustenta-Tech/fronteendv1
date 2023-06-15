import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography, TextField, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaProdutos.css';
import { buscaProduto } from '../../../services/Service';
import Produto from '../../../models/Produto';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BuscaProdutoPorNome from '../buscaprodutopornome/BuscaProdutoPorNome';



function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  let navigate = useNavigate();


  async function getProdutos() {
    await buscaProduto('/produtos', setProdutos);
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <>
      <Grid container xs={12} direction="row" justifyContent="center" alignItems="flex-start"  >
        <Box display="flex" flexDirection="column" alignItems="center" pt={1} pb={1}>
          <Box display="flex" alignItems="center" mb={1} pt={1} pb={0.5}>
            <Typography variant="h6" component="p" style={{ marginRight: '0.5rem' }}>
              <b>Frete grátis</b>
            </Typography>
            <Typography variant="body1" component="p" style={{ marginRight: '0.5rem' }}>
              para compras acima de
            </Typography>
            <Typography variant="h6" component="p" style={{ marginRight: '25rem' }}>
              <b>R$99,99</b>
            </Typography>
            <Typography variant="body1" component="p" style={{ marginRight: '0.5rem' }}>
              Parcele em até
            </Typography>
            <Box pb={0.3}>
              <Typography variant="h6" component="p" style={{ marginRight: '0.5rem' }}  >
                <b>10x sem juros</b>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid container xs={12} direction="row" justifyContent="center" alignItems="flex-start" className='fundo' >
        <Box display="flex" flexDirection="column" alignItems="center" pt={1} pb={1} >
          <Box display="flex" alignItems="center" mb={1} className='searchContainer'>
            {/* <TextField
              id="search"
              label="Buscar"
              variant="outlined"
              className="searchField"
              style={{ width: '100%', height: '3.5rem', maxWidth: '500px' }}
            /> */}
             <Link to="/buscaprodutopornome">
            <Button variant="contained" color="primary" startIcon={<SearchIcon />} style={{ height: '3.5rem', marginLeft: '0.5rem' }}  >
              Pesquisar produto por nome
            </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} justifyContent="center" className='fundo' >
        <Box display="flex" flexWrap="wrap" justifyContent="center" className='boxProduto'>
          {produtos.map((produto) => (
            <Card key={produto.id} variant="outlined" className="cardPostagem">
              <CardContent>
                <Typography variant="h5" component="h2">
                  <img src={`${produto.foto}`} alt="" className="imagempost" referrerPolicy="no-referrer" />
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.nome}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  <b>Preço:</b> R$ {produto.preco}
                </Typography>
                <Typography variant="body2" component="p">
                  <b>Quantidade em estoque:</b> {produto.quantidade}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  <b>Categoria:</b> {produto.categoria?.tipo}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link to="" className="text-decorator-none">
                    <Box mx={1} >
                      <Button variant="contained" className="marginLeft" size="small" color="primary">
                        Comprar
                      </Button>
                      <Button variant="contained" size="small" color="secondary">
                        <FavoriteIcon />
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Grid>
    </>
  );
}
export default ListaProdutos;
