import React from "react";
import { Grid, Typography } from '@material-ui/core'
import WhatsappIcon from '@material-ui/icons/Whatsapp';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import { Box } from '@mui/material'

function Footer() {
    return (
        <>
            <Grid container xs={12}>
                <Grid item xs={4}>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6" align="left" className='titulo'>Redes Sociais</Typography>
                        <Box display="flex" alignItems="left" justifyContent="left">
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
                <Grid item xs>
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
                <Grid item xs>
                    <Box display="flex" flexDirection="column" alignItems="left" >
                        <Typography variant="h6" align="left" className='titulo' >SustentaTech</Typography>
                        <Typography variant="h6" align="left" gutterBottom style={{ color: "black" }}>O ecommerce SustentaTech faz muito mais que só te proporcionar boas compras. Nosso ecommerce permite que você ajude o meio ambiente colaborando com a Agenda 2030 da ONU.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box style={{ backgroundColor: "black", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="left" gutterBottom style={{ color: "white" }}>© 2023 | Todos os direitos reservados</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;
