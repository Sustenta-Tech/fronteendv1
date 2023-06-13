import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { buscaId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import FavoriteIcon from '@material-ui/icons/Favorite';


function ProdutosCategoria() {
    const [categoria, setCategoria] = useState<Categoria | null>(null);
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState['tokens']>((state) => state.tokens);

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado', {
                position: 'top-right',
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            navigate('/login');
        }
    }, [token]);

    async function fetchCategoria() {
        try {
            buscaId(`/categorias/${id}`, setCategoria, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error) {
            console.error('Erro ao buscar a categoria:', error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            fetchCategoria();
        }
    }, [id]);

    if (!categoria) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <Grid item xs={12} justifyContent="center" className='fundo' >

                <Box justifyContent="center" textAlign="center" >
                    <Typography variant="h5" component="h2">
                        Categoria: {categoria.tipo}
                    </Typography>
                    <Typography variant="body1" component="h2">
                        Descrição: {categoria.descricao}
                    </Typography>
                </Box>

                <Box display="flex" flexWrap="wrap" justifyContent="center" className='boxProduto'>
                    {/* {categoria.produto.map((produto) => ( */}
                    {categoria.produto.length > 0 ? (
                        categoria.produto.map((produto) => (
                            <Card key={categoria.id} variant="outlined" className="cardPostagem">
                                <CardContent>

                                    <Typography variant="h5" component="h2">
                                        <img src={`${produto.foto}`} alt="" className="imagempost" referrerPolicy="no-referrer" />
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
                                        <b>Categoria:</b> {categoria.tipo}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Box display="flex" justifyContent="center" mb={1.5}>
                                        <Link to="" className="text-decorator-none">
                                            <Box mx={1} >
                                                <Button variant="contained" className="marginLeft" size="small" color="primary">
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
                        ))
                    ) : (
                        <Typography variant="h5" component="h2">
                            Nenhum produto disponível nessa categoria.
                        </Typography>
                    )}
                </Box>
            </Grid>
        </>
    );
}

export default ProdutosCategoria;