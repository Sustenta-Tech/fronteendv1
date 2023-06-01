import React from "react";
import { Grid, Typography } from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import './Footer.css'
import { Box } from '@mui/material'

function Footer() {
    return (
        <>
            <Grid container xs={12} className="gridFooter">
                <Grid item xs={2} >
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6" align="center">Redes Sociais</Typography>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 35, color: "black" }} />
                            </a>
                            <a href="/" target="_blank">
                                <GitHubIcon style={{ fontSize: 35, color: "black" }} />
                            </a>
                            <a href="/" target="_blank">
                                <WhatsAppIcon style={{ fontSize: 35, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6" align="center" >Formas de Pagamento</Typography>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="/" target="_blank">
                                <CreditCardIcon style={{ fontSize: 35, color: "black" }} />
                            </a>
                            <a href="/" target="_blank">
                                <PhoneIphoneIcon style={{ fontSize: 35, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3}  >
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
                        <Typography variant="h6" align="center" >SustentaTech</Typography>
                        <Typography align="center" gutterBottom className="textFooter">O ecommerce SustentaTech não apenas oferece boas compras, mas também permite que você ajude o meio ambiente ao colaborar com a Agenda 2030 da ONU.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box display="flex" justifyContent="space-around" >
                        <Box alignItems="center" justifyContent="center" >
                            <Typography variant="h6" align="center" >Projeto</Typography>
                            <img src='src\imagens\logo+nome.png' alt="logo" />
                        </Box>

                        <Box justifyContent="center">
                            <Typography variant="h6" align="center">Patrocinador</Typography>
                            <img src='src\imagens\Sumup.png' alt="logo" />            
                        </Box>

                        <Box justifyContent="center">
                            <Typography variant="h6" align="center">Apoio</Typography>
                            <img src='src\imagens\logoGen.png' alt="logo" />
                        </Box>
                    </Box>
                </Grid>
            </Grid >
            <Grid item xs={12} >
                <Box className='footer' style={{ height: "45px" }}>
                    <Box paddingTop={1} >
                        <Typography variant="subtitle2" align="left" gutterBottom style={{ color: "white" }}>© 2023 | Todos os direitos reservados</Typography>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default Footer;
