import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
// import useLocalStorage from 'react-use-localstorage';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
// import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastroProduto() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    // const [token, setToken] = useLocalStorage('token');
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            // toast.error('Você precisa estar logado', {
            //     position: "top-right",
            //     autoClose: 3500,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: false,
            //     draggable: false,
            //     theme: "colored",
            //     progress: undefined,
            // });

            navigate("/login")
        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            tipo: '',
            descricao: ''
        })
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        preco: 0,
        quantidade: 0,
        descricao: '',
        foto: '',
        categoria: null
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto atualizado com sucesso');
            // toast.success('Produto atualizado com sucesso', {
            //     position: "top-right",
            //     autoClose: 3500,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: false,
            //     draggable: false,
            //     theme: "colored",
            //     progress: undefined,
            // });
        } else {
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            // toast.success('Produto cadastrado com sucesso', {
            //     position: "top-right",
            //     autoClose: 3500,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: false,
            //     draggable: false,
            //     theme: "colored",
            //     progress: undefined,
            // });
            alert('Produto cadastrado com sucesso');
        }
        back()

    }

    function back() {
        navigate('/admin')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastro de produtos</Typography>

                <TextField
                    value={produto.foto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                    id="foto" label="foto" name="foto" variant="outlined" margin="normal" fullWidth />

                <TextField
                    value={produto.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                    id="nome" label="Nome do Produto" name="nome" variant="outlined" margin="normal" fullWidth />

                <TextField
                    value={produto.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                    id="descricao" label="Descricao" name="descricao" variant="outlined" margin="normal" fullWidth />

                <TextField
                    value={produto.quantidade}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                    id="quantidade" label="Quantidade em estoque" name="quantidade" variant="outlined" margin="normal" fullWidth />

                <TextField
                    value={produto.preco}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                    id="preco" label="Preco" name="preco" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.tipo}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroProduto;