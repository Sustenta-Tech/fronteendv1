import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaCategoria.css';
import { busca } from '../../../services/Service';
// import { useSelector } from 'react-redux';
// import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import useLocalStorage from 'react-use-localstorage';

function ListaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([])
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    // const token = useSelector<TokenState, TokenState["tokens"]>(
    //     (state) => state.tokens
    // );

    useEffect(() => {
        if (token == '') {
            // alert("Você precisa estar logado")
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
            {/* <Box m={2} justifyItems='center'>
                <Link to="/formularioTema">
                    <Button variant="contained" className="marginLeft" size='small' color="primary">
                        Cadastrar um novo tema
                    </Button>
                </Link>
            </Box> */}
            {
                categorias.map(categoria => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {categoria.tipo}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {categoria.descricao}
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >
                                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions> */}
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}


export default ListaCategoria;