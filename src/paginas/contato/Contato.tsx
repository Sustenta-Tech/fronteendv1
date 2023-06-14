import React, { useState } from "react";
import "./Contato.css"
import { Button, Grid, Snackbar, TextField, Typography } from "@material-ui/core";
import { Box, useTheme } from "@mui/material";

function Contato() {

    const theme =  useTheme();
    
    const [enviado, setEnviado] = useState(false);

    const handleEnviar = () => {
        setEnviado(true);
    };

    const handleFecharSnackbar = () => {
        setEnviado(false);
    };

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' style={{ backgroundColor: theme.palette.background.paper}} className="gridContato">
                <Grid item xs={12} sm={6} className="alinhamento">
                    <Box textAlign='center'>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' className='textoPrimario' style={{ color: theme.palette.secondary.contrastText}}>Contato</Typography>
                        <Typography variant='h6' color='textPrimary' align='center' className='textoSecundario'paragraph  style={{ color: theme.palette.secondary.contrastText}}>Confira nossos canais de contato. Se preferir, preencha o formulário ao lado para nos contatar.</Typography>
                        <Typography variant='h6' color='textPrimary' align='center' className="telicon" paragraph  style={{ color: theme.palette.secondary.contrastText}}>
                            <img src="https://imgur.com/5L8QllA.png" alt="Ícone de telefone" /> (11) 2556-7458
                        </Typography>
                        <Typography variant='h6' color='textPrimary' align='center' className="emailicon" paragraph style={{ color: theme.palette.secondary.contrastText}}>
                            <img src="https://imgur.com/4pKmYHP.png" alt="Ícone de email" /> sustentatechintegrador@gmail.com
                        </Typography>
                        <Typography variant='h6' color='textPrimary' align='center' className="emailicon" paragraph style={{ color: theme.palette.secondary.contrastText}}>
                            <img src="https://imgur.com/uYZcIKU.png" alt="Ícone de localizacao" /> Endereço: São Paulo - SP
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} alignItems='center' style={{ backgroundColor: theme.palette.background.default }} className="teste">
                    <main className="contato">
                        <form className="formulario">
                            <TextField
                                className="textFieldCont"
                                id="nome"
                                type="text"
                                label="Nome"
                                margin="dense"
                                placeholder="Insira o seu nome completo..."
                                fullWidth
                            />
                            <TextField
                                className="textFieldCont"
                                id="email"
                                type="text"
                                label="Email"
                                margin="dense"
                                placeholder="Insira o seu email completo..."
                                fullWidth
                            />
                            <TextField
                                className="textFieldCont"
                                id="assunto"
                                type="text"
                                label="Assunto"
                                margin="dense"
                                placeholder="Insira o assunto da mensagem..."
                                fullWidth
                            />
                            <Box my={2}>
                                <TextField
                                    className="textFieldCont"
                                    id="mensagem"
                                    label="Mensagem"
                                    multiline
                                    rows={8}
                                    placeholder="Insira a sua mensagem..."
                                    fullWidth
                                />
                            </Box>
                            <Box textAlign='center' my={2}>
                                <Button variant='contained' color='primary' type='submit' onClick={handleEnviar} style={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText }}>Enviar</Button>
                            </Box>
                        </form>
                    </main>
                </Grid>
            </Grid>
            <Snackbar
                open={enviado}
                autoHideDuration={3000}
                onClose={handleFecharSnackbar}
                message="Mensagem enviada com sucesso!"
            />


        </>
    )
}

export default Contato;
