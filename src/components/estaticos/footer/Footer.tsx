import React from "react";
import { Grid, Typography } from '@material-ui/core'
import WhatsappIcon from '@material-ui/icons/Whatsapp';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import './Footer.css'
import { Box } from '@mui/material'

function Footer() {
    return (
        <>
            <Grid container xs={12}>
                <Grid item xs>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6" align="center" className='titulo'>Redes Sociais</Typography>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, color: "black" }} />
                            </a>
                            <a href="/" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, color: "black" }} />
                            </a>
                            <a href="/" target="_blank">
                                <WhatsappIcon style={{ fontSize: 40, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6" align="left" className='titulo'>Formas de Pagamento</Typography>
                        <Box display="flex" alignItems="left" justifyContent="left">
                            <a href="/" target="_blank">
                                <CreditCardIcon style={{ fontSize: 40, color: "black" }} />
                            </a>
                            <a href="/" target="_blank">
                                <PhoneIphoneIcon style={{ fontSize: 40, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" flexDirection="column" alignItems="center" style={{ width: "300px" }}>
                        <Typography variant="h6" align="center" className='titulo'>SustentaTech</Typography>
                        <Typography align="center" gutterBottom style={{ color: "black" }}>O ecommerce SustentaTech não apenas oferece boas compras, mas também permite que você ajude o meio ambiente ao colaborar com a Agenda 2030 da ONU.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" alignItems="right" justifyContent="right" >
                        <Typography variant="h6" align="right" className='titulo'>Projeto</Typography>
                    </Box>
                    <Box display="flex" alignItems="right" justifyContent="right" >
                        <img src='src\imagens\logo+nome.png' alt="logo" />
                    </Box>

                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant="h6" align="right" className='titulo'>Patrocinador</Typography>
                    </Box>
                    
                        <Box display="flex" justifyContent="center" >
                        <img src='src\imagens\Sumup.png' alt="logo" />
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="left">
                        <Typography variant="h6" align="left" className='titulo'>Apoio</Typography>
                    </Box>
                    <Box display="flex"  justifyContent="left"  >
                        <img src='src\imagens\logoGen.png' alt="logo" />
                    </Box>

                </Grid>
                <Grid item xs={12}>
                    <Box className='footer' style={{  height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="left" gutterBottom style={{ color: "white" }}>© 2023 | Todos os direitos reservados</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}

export default Footer;
