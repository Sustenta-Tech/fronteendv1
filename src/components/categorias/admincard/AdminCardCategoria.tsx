import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../services/Service';
import { toast } from 'react-toastify';

function AdminCardCategoria() {

    const theme =  useTheme();

    const [categorias, setCategorias] = useState<Categoria[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

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
            {
                categorias.map(categoria => (
                    <Box m={2} >
                        <Card variant="outlined" className='cardPostagem' style={{ backgroundColor: theme.palette.background.default, color: theme.palette.secondary.contrastText }}>
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
                                            <Button variant="contained" className="marginLeft" size='small' style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarcategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' style={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText }}>
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