import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaProdutos.css';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../../models/Produto';
// import ModalPostagem from '../modalPostagem/ModalPostagem';
// import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    // const token = useSelector<TokenState, TokenState["tokens"]>(
    //     (state) => state.tokens
    // );

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    async function getProdutos() {
        await busca("/produtos", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getProdutos()
    }, [produtos.length])



    return (
        <>
            {/* <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={12}>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                    </Box>
                </Grid>
            </Grid> */}
            {
                produtos.map(produto => (
                    <Box m={2} >
                        <Card variant="outlined" className='cardPostagem'>
                            <CardContent >
                                <Typography variant="h5" component="h2">
                                    <img src={`${produto.foto}`} alt="" className='imagempost' referrerPolicy="no-referrer"/>
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
                                    <Link to="" className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                Comprar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>)
}

export default ListaProdutos;