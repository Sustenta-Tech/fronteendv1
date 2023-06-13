import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaCategoria.css';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
// import useLocalStorage from 'react-use-localstorage';

function ListaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([])
    let navigate = useNavigate();
    // const [token, setToken] = useLocalStorage('token');

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")
        }
    }, [token])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getCategorias()
    }, [categorias.length])



    return (
        <>
            {
                categorias.map(categoria => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <Link to={`/produtosCategoria/${categoria.id}`} className="text-decorator-none" >

                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {categoria.tipo}
                                    </Typography>
                                </CardContent>

                            </Link>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}


export default ListaCategoria;