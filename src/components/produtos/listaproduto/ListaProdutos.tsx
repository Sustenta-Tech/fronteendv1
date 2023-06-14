import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography, TextField, Grid } from '@material-ui/core';
import { Box, useTheme } from '@mui/material';
import './ListaProdutos.css';
import { buscaProduto } from '../../../services/Service';
import Produto from '../../../models/Produto';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { CarrinhoContext } from '../../../store/carrinhocontext/CarrinhoContext';



function ListaProdutos() {

  const theme = useTheme();

  const [produtos, setProdutos] = useState<Produto[]>([]);
  let navigate = useNavigate();

  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  async function getProdutos() {
    await buscaProduto('/produtos', setProdutos);
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <>
      <Grid container xs={12} className='fretemenor' style={{ marginTop: '1rem', marginBottom: '1rem' }} >
        <Grid container xs={6} direction="row" justifyContent="center" alignItems="center" className='fretemenor' style={{ color: theme.palette.secondary.contrastText }}>
          <Box>
            <Typography variant="h6" component="p" style={{ marginRight: '0.5rem' }}>
              <b>Frete grátis</b>
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" component="p" style={{ marginRight: '0.5rem' }}>
              para compras acima de
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="p" style={{ marginRight: '0.5rem' }}>
              <b>R$99,99</b>
            </Typography>
          </Box>
        </Grid>
        <Grid container xs={6} direction="row" justifyContent="center" alignItems="center">

          <Box style={{ color: theme.palette.secondary.contrastText }}>
            <Typography variant="body1" component="p" style={{ marginRight: '0.5rem' }}>
              Parcele em até
            </Typography>
          </Box>
          <Box pb={0.3} style={{ color: theme.palette.secondary.contrastText }}>
            <Typography variant="h6" component="p" style={{ marginRight: '0.5rem' }}  >
              <b>10x sem juros</b>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container xs={12} direction="row" justifyContent="center" alignItems="flex-start" className='fundo' style={{ backgroundColor: theme.palette.background.paper }}>
        <Box display="flex" flexDirection="column" alignItems="center" pt={1} pb={1} >
          <Box display="flex" alignItems="center" mb={1} className='searchContainer'>
            <TextField
              id="search"
              label="Buscar"
              variant="outlined"
              className="searchField"
              style={{ width: '100%', height: '3.5rem', maxWidth: '500px' }}
            />
            <Button variant="contained" startIcon={<SearchIcon />} style={{ width: '3rem', height: '3.5rem', marginLeft: '0.5rem', backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText}}  >
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} justifyContent="center" className='fundo' style={{ backgroundColor: theme.palette.background.paper }}>
        <Box display="flex" flexWrap="wrap" justifyContent="center" className='boxProduto'>
          {produtos.map((produto) => (
            <Card key={produto.id} variant="outlined" className="cardPostagem" style={{ backgroundColor: theme.palette.background.default, color: theme.palette.secondary.contrastText }}>
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
                <Typography variant="body2" component="p" >
                  <b>Categoria:</b> {produto.categoria?.tipo}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link to="" className="text-decorator-none">
                    <Box mx={1} >
                      <Button
                        variant="contained"
                        className="marginLeft"
                        size="small"
                        style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
                        onClick={() => adicionarAoCarrinho(produto)}
                      >
                        Adicionar ao carrinho
                      </Button>
                      <Button variant="contained" size="small" style={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText }}>
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