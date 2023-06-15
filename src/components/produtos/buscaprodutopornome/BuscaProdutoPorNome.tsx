import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography, TextField, Grid, Box } from '@material-ui/core';
import { useTheme } from '@mui/material';
import { busca } from '../../../services/Service';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { CarrinhoContext } from '../../../store/carrinhocontext/CarrinhoContext';
import Produto from '../../../models/Produto';
import { toast } from 'react-toastify';
import './BuscaProdutoPorNome.css'

function BuscaProdutoPorNome() {
  const theme = useTheme();
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nomeProduto, setNomeProduto] = useState<string>("");
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      toast.error('Usuário não autenticado!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });

      navigate("/Login")
    }
  }, [token]);

  async function getProdutos() {
    try {
      await busca(`/produtos/nome/${nomeProduto}`, setProdutos, {
        headers: {
          'Authorization': token
        }
      });
    } catch (error: any) {
      console.error(error);
      if (error.response?.status === 403) {
        dispatch(addToken(''));
      }
    }
  }

  function updateNome(e: ChangeEvent<HTMLInputElement>) {
    setNomeProduto(e.target.value);
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    getProdutos();
  }

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={2} width="100%">
          <TextField
            label="Digite o nome do produto"
            name="nome"
            id="nome"
            value={nomeProduto}
            variant="outlined"
            className="textFieldBusca"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateNome(e)}
          />
          <Box mx={1}>
            <Button
              type="submit"
              variant="contained"
              className="marginLeft"
              size='medium'
              disabled={nomeProduto.length === 0 ? true : false}
              style={{ height: '3.5rem', marginLeft: '0.5rem', backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText}}  
            >
              Pesquisar
            </Button>
          </Box>
        </Box>
      </form>
      {produtos.length === 0 ? (
        <Box m={6} display="flex" flexWrap="wrap" justifyContent="center" style={{ height: '10rem', marginLeft: '0.5rem', color: theme.palette.secondary.contrastText}}>
          <Typography gutterBottom>Nenhum produto encontrado</Typography>
        </Box>
      ) : (
        <>
          <Grid item xs={12} justifyContent="center" className='fundo' style={{ backgroundColor: theme.palette.background.paper }}>
            <Box display="flex" flexWrap="wrap" justifyContent="center" className='boxProduto'>
              {produtos.map((produto) => (
                <Card
                  key={produto.id}
                  variant="outlined"
                  className="cardPostagem"
                  style={{ backgroundColor: theme.palette.background.default, color: theme.palette.secondary.contrastText }}
                >
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
                    <Typography variant="body2" component="p">
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
                          <Button
                            variant="contained"
                            size="small"
                            style={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText }}
                          >
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
      )}
    </>
  );
}

export default BuscaProdutoPorNome;
