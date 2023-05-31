import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaProdutos.css';
import { buscaProduto } from '../../../services/Service';
import Produto from '../../../models/Produto';


function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([])

    async function getProdutos() {
        await buscaProduto("/produtos", setProdutos);
    }

    useEffect(() => {
        getProdutos()
    }, [produtos.length])



    return (
        <>
            {
                produtos.map(produto => (
                    <Box m={2} >
                        <Card variant="outlined" className='cardPostagem'>
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