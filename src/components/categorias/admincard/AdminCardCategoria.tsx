import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
// import { useSelector } from 'react-redux';
// import { TokenState } from '../../../store/tokens/tokensReducer';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../services/Service';

function AdminCardCategoria() {

    const [categorias, setCategorias] = useState<Categoria[]>([])
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    // const token = useSelector<TokenState, TokenState["tokens"]>(
    //     (state) => state.tokens
    // );

    // useEffect(() => {
    //     if (token == '') {
    //         alert("Você precisa estar logado")
    //         navigate("/login")
    //     }
    // }, [token])

    // async function getcategorias() {
    //     await busca("/categorias", setCategorias, {
    //         headers: {
    //             'Authorization': token
    //         }
    //     })
    // }

    async function getCategoria() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        });
    }

    useEffect(() => {
        getCategoria()
    }, [categorias.length])



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
                categorias.map(categoria => (
                    <Box m={2} >
                        <Card variant="outlined" className='cardPostagem'>
                            <CardContent >
                                <Typography variant="h5" component="h2">
                                    {categoria.tipo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {categoria.descricao}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                <Link to={`/formulariocategoria/${categoria.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarcategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
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

export default AdminCardCategoria;