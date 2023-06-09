import React from "react";
import { Grid, Typography } from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import './Footer.css'
import { Box, useTheme } from '@mui/material'

function Footer() {
    const theme =  useTheme();
    
    return (
        <>
            <Grid container md={12} className="gridFooter" style={{ backgroundColor: theme.palette.background.default }}>
                <Grid item md={2} sm={6} xs={12}>
                    <Box display="flex" flexDirection="column" className="marginBottonFooter">
                        <Typography variant="h6" align="center" style={{ color: theme.palette.secondary.contrastText}}>Redes Sociais</Typography>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 35, color: theme.palette.secondary.contrastText }} />
                            </a>
                            <a href="/" target="_blank">
                                <GitHubIcon style={{ fontSize: 35, color: theme.palette.secondary.contrastText }} />
                            </a>
                            <a href="/" target="_blank">
                                <WhatsAppIcon style={{ fontSize: 35, color: theme.palette.secondary.contrastText }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2} sm={6} xs={12}>
                    <Box display="flex" flexDirection="column" className="marginBottonFooter">
                        <Typography variant="h6" align="center" style={{ color: theme.palette.secondary.contrastText}}>Formas de Pagamento</Typography>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="/" target="_blank">
                                <CreditCardIcon style={{ fontSize: 35, color: theme.palette.secondary.contrastText}} />
                            </a>
                            <a href="/" target="_blank">
                                <PhoneIphoneIcon style={{ fontSize: 35, color: theme.palette.secondary.contrastText }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-around">
                        <Typography variant="h6" align="center"style={{ color: theme.palette.secondary.contrastText}}>SustentaTech</Typography>
                        <Typography align="center" gutterBottom className="textFooter" style={{ color: theme.palette.secondary.contrastText}}>O ecommerce SustentaTech não apenas oferece boas compras, mas também permite que você ajude o meio ambiente ao colaborar com a Agenda 2030 da ONU.</Typography>
                    </Box>
                </Grid>
                <Grid item md={5} sm={6} xs={12}>
                    <Box display="flex" justifyContent="space-around">
                        <Box alignItems="center" justifyContent="center" >
                            <Typography variant="h6" align="center"style={{ color: theme.palette.secondary.contrastText}}>Projeto</Typography>
                            <img src='https://imgur.com/xu73cBI.png' alt="logo" referrerPolicy="no-referrer" />
                        </Box>

                        <Box justifyContent="center">
                            <Typography variant="h6" align="center" style={{ color: theme.palette.secondary.contrastText}}>Patrocinador</Typography>
                            <img src='https://imgur.com/Z6oteMk.png' alt="logo" referrerPolicy="no-referrer" />
                        </Box>

                        <Box justifyContent="center">
                            <Typography variant="h6" align="center" style={{ color: theme.palette.secondary.contrastText}}>Apoio</Typography>
                            <img src='https://imgur.com/MG0lNNy.png' alt="logo" referrerPolicy="no-referrer" />
                        </Box>
                    </Box>
                </Grid>
            </Grid >
            <Grid item md={12} >
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
