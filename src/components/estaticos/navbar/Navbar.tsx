import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import './Navbar.css'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Navbar() {
    return (
        <>
            <AppBar position='static' className='navbar' >
                <Toolbar variant='dense' className='separar'>

                    <Box display="flex" justifyContent="start" className='boxNav' >

                        <Box className='cursor'>
                            <img src='https://imgur.com/kp8jLoG.png' alt="logo" />
                        </Box>

                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6'>
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/sobre' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6'>
                                    Sobre
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/produtos' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6' >
                                    Produtos
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/contato' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6' >
                                    Contato
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/admin' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6' >
                                    Admin
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6'>
                                    Login
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/carrinho' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <ShoppingCartIcon />
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;