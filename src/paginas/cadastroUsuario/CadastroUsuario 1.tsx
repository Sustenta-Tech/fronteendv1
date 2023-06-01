import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario1() {

    const navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
            // console.log(userResult)
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuario cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } catch (error) {
                toast.error('Dados inválidos. Erro ao cadastrar!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
        } else {
            toast.error('As senhas digitadas não correspondem!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }
    return (
        <Grid container direction='row' className='gridCadastro'>
            <Grid xs={6} container direction='row' justifyContent='flex-end'>
                <Box className='cardInfoCadastro'>
                    <form onSubmit={onSubmit} className='formCadastro'>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='email' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='url foto' variant='outlined' name='foto' margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

            <Grid xs={6} container direction='row' justifyContent='flex-start'>
                <Box paddingX={5} className='cardVerde'>
                    <Typography variant='h3' gutterBottom component='h3' className='subtitulo'>
                        Ainda não tem cadastro?
                    </Typography>
                    <p className="texto">Se cadastre no link abaixo para conseguir efetuar as suas compras e aproveitar ainda mais o nosso site!</p>

                    <Box marginTop={2} textAlign='center'>
                        <Link to="/cadastro">
                            <Button type='submit' variant='contained' className='button'>
                                Cadastre-se
                            </Button>
                        </Link>

                    </Box>
                </Box>
            </Grid>

        </Grid>




        // <Grid container direction='row' justifyContent='center' alignItems='center'>
        //     <Grid item xs={6} className='imagem2'></Grid>
        //     <Grid item xs={6} alignItems='center'>
        //         <Box paddingX={10}>
        //             <form onSubmit={onSubmit}>
        //                 <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
        //                 <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
        //                 <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='email' variant='outlined' name='usuario' margin='normal' fullWidth />
        //                 <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
        //                 <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
        //                 <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='url foto' variant='outlined' name='foto' margin='normal' fullWidth />
        //                 <Box marginTop={2} textAlign='center'>
        //                     <Link to='/login' className='text-decorator-none'>
        //                         <Button variant='contained' color='secondary' className='btnCancelar'>
        //                             Cancelar
        //                         </Button>
        //                     </Link>
        //                     <Button type='submit' variant='contained' color='primary'>
        //                         Cadastrar
        //                     </Button>
        //                 </Box>
        //             </form>
        //         </Box>
        //     </Grid>



        // </Grid>
    );
}

export default CadastroUsuario1;