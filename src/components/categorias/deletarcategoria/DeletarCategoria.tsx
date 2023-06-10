import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box, useTheme } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
// import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';
import { toast } from 'react-toastify';
// import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './DeletarCategoria.css'

function DeletarCategoria() {

    const theme =  useTheme();

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    // const [token, setToken] = useLocalStorage('token');
    const [categoria, setCategoria] = useState<Categoria>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 3000,
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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/admin')
        deleteId(`/categorias/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        toast.success('Produto deletada com sucesso', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
    }

    function nao() {
        navigate('/admin')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent className='cardDeletarCateg'>
                        <Box justifyContent="center" >
                            <Typography color="textPrimary" gutterBottom>
                                <b>Deseja realmente deletar a categoria:</b>
                            </Typography>
                            <Typography color="textPrimary" >
                                {categoria?.tipo}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions className='cardDeletarCateg' >
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2} >
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' style={{ backgroundColor: '#dc3545'}}>
                                    Sim
                                </Button>
                            </Box>
                            <Box >
                                <Button onClick={nao} variant="contained" size='large' style={{  backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText  }} >
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarCategoria;