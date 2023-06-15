import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box, useTheme } from '@mui/material';
import './DeletarProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import { toast } from 'react-toastify';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeletarProduto() {

    const theme =  useTheme();

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [produto, setProdutos] = useState<Produto>()

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
        buscaId(`/produtos/${id}`, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        deleteId(`/produtos/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        navigate('/admin')
        toast.success('Produto deletado com sucesso!', {
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
            <Box m={2} >
                <Card variant="outlined" >
                    <CardContent className='cardDeletarProd'>
                        <Box justifyContent="center">
                            <Typography color="textPrimary" gutterBottom>
                               <b>Deseja realmente deletar o produto abaixo?</b>
                            </Typography>
                            <Typography color="textPrimary" >
                                {produto?.nome}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions className='cardDeletarProd'>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' style={{ backgroundColor: '#dc3545' }}>
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" size='large' style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
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
export default DeletarProduto;