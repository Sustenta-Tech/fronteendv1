import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../services/Service';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {

    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updateModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            toast.success('Usuário logado com sucesso!', {
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
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
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

        // console.log('userLogin: ' + Object.values(userLogin));
    }

    return (
        <Grid container direction='row' className='grid'>

            <Grid xs={6} container direction='row' justifyContent='flex-end'>
                <Box className='cardInfo'>
                    <form onSubmit={onSubmit}>

                        <Box textAlign='center'>
                            {/* <img src='src\imagens\logo+nome.png' /> */}
                            <Typography variant='h5' gutterBottom color='primary' component='h3' align='center' className='tituloLogin'>
                                Entrar
                            </Typography>
                        </Box>

                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='E-mail' name='usuario' margin='normal' fullWidth />

                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha' name='senha' margin='normal' type='password' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color="primary" id='buttonEntrar'>
                                Acessar
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
    )
}

export default Login;