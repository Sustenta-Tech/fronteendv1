import React, { useEffect, useState } from 'react'
import { AppBar, Button, Tab, Tabs } from '@material-ui/core';
import { Box, useTheme } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './Admin.css';
import { Link, useNavigate } from 'react-router-dom';
import AdminCardProduto from '../../components/produtos/admincard/AdminCardProduto';
import AdminCardCategoria from '../../components/categorias/admincard/AdminCardCategoria';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TokenState } from '../../store/tokens/tokensReducer';

function Admin() {

    const theme =  useTheme();
    

    //Recebendo o token: 
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
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

    // TabContext:
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }


    return (
        <>
            <Box display="flex" justifyContent="center" >
                <img src="https://imgur.com/TQKUqDN.png" className='imgAdm' alt="Foto apresentando o Painel Administrativo" referrerPolicy="no-referrer" />
            </Box>

            <Box m={2} display="flex" justifyContent="center" >

                <Link to="/formularioProduto">
                    <Button variant="contained" size='small' color='primary' style={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText }}>
                        Cadastrar produto
                    </Button>
                </Link>

                <Link to="/formularioCategoria">
                    <Button variant="contained" size='small' color="secondary"  style={{ marginLeft: '10px', backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText }}>
                        Cadastrar categoria
                    </Button>
                </Link>

            </Box>



            <TabContext value={value} >


                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}  style={{ backgroundColor: theme.palette.secondary.dark, color: theme.palette.secondary.contrastText }}>
                        <Tab label="Todos os produtos" value="1" />
                        <Tab label="Todas as categorias" value="2" />
                    </Tabs>
                </AppBar>

                <TabPanel value="1" className='bodyTab' style={{ backgroundColor: theme.palette.background.paper }}>
                    <Box display="flex" flexWrap="wrap" justifyContent="center" >
                        <AdminCardProduto />
                    </Box>
                </TabPanel>



                <TabPanel value="2" className='bodyTab' style={{ backgroundColor: theme.palette.background.paper }}>
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <AdminCardCategoria />
                    </Box>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default Admin;