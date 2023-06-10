import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box, useTheme } from '@mui/material';
import { busca } from '../../../services/Service';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './AdminCardProduto.css'
import { toast } from 'react-toastify';

function AdminCardProduto() {

    const theme =  useTheme();

    const [produtos, setProdutos] = useState<Produto[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
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
            {
                produtos.map(produto => (
                    <Box m={2} className='AdminCardProduto'>
                        <Card variant="outlined" className='cardPostagem' style={{ backgroundColor: theme.palette.background.default, color: theme.palette.secondary.contrastText }}>
                            <CardContent >
                                <Typography variant="h5" component="h2">
                                    <img src={`${produto.foto}`} alt="" className='imagempost' referrerPolicy="no-referrer" />
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
                                <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small'  style={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText }}>
                                                deletar
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

export default AdminCardProduto;