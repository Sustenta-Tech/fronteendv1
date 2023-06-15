import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography, TextField, Grid, Box } from '@material-ui/core';
import { busca } from '../../../services/Service';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import Produto from '../../../models/Produto';
import { toast } from 'react-toastify';

function BuscaProdutoPorNome() {
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
    setNomeProduto(
      e.target.value);
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    getProdutos();
  }

  // useEffect(() => {
  //   getProdutos();
  // }, []);

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={2} width="100%">
          <TextField
            label="Nome"
            name="nome"
            id="nome"
            value={nomeProduto}
            variant="outlined"
            className="input"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateNome(e)}
          />
          <Box mx={1}>
            <Button type="submit" variant="contained" className="marginLeft" size='medium' color="primary"
              disabled={nomeProduto.length === 0 ? true : false}
            >
              Pesquisar
            </Button>
          </Box>
        </Box>
      </form>
      {
        produtos.length === 0 ? (
          <Box m={6}>
            <Typography color="textSecondary" gutterBottom>Nenhum produto encontrado</Typography>
          </Box>
        ) : (
          produtos.map((produto) => (
            <Box m={2} key={produto.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <img src={produto.foto} alt="" referrerPolicy="no-referrer" />
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
                    <Link to="">
                      <Box mx={1} >
                        <Button variant="contained" size="small" color="primary">
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
            </Box>
          ))
        )
      }

    </>
  );
}

export default BuscaProdutoPorNome;
