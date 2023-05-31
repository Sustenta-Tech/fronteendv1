import { Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import './Sobre.css'

function Sobre() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Somos Sustenta Tech</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Somos uma organização que tem o compromisso de oferecer alternativas inteligentes e profissionais para atender às necessidades de nossos clientes e do planeta.
                            Nos dedicamos a encontrar soluções inovadoras e eficientes, que ajudem a impactar positivamente o mundo e melhorar a vida das pessoas.
                            Os nossos valores são guiados pela ética, qualidade e respeito ao meio ambiente.
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className="imagemlogo">
                    <img src="src\imagens\iconesobre3.png"/>
                </Grid>
                {/* <Grid item xs={6} >
                    <img src="https://i.imgur.com/3CytTdi.jpg" alt="" width="724px" height="500px" referrerPolicy="no-referrer"/>
                </Grid> */}
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='cardmissao' >
                <Grid item xs={6} className="imagem">
                <img src="src\imagens\iconesobre.png"/>
                </Grid>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Nossa Missão</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='devscard'>A Sustenta Tech acredita que juntos, podemos promover um futuro mais sustentável e ecologicamente viável. Oferecemos soluções que visam incentivar a utilização de fontes renováveis de energia, garantindo produtos de alta qualidade e confiabilidade.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Tecnologias</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className="imagemlampada">
                <img src="src\imagens\iconesobre2.png"/>
                </Grid>
            </Grid>

{/* GRID DESENVOLVEDOR */}

            <Grid container spacing={2} className='cardtech'>
                <Grid item xs={3}>
                    <Box paddingX={5} >
                        <h3>Andresa Marçal</h3>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Formada em Recursos Humanos e atualmente cursando Análise e Desenvolvimento de Sistemas. Sou apaixonada por desafios. Encontrei na Tecnologia a paixão que me impulsiona a aprender e evoluir constantemente.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                    <Box paddingX={5} >
                        <h3>Andressa Camillo</h3>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center"  className='devscard'>Formada em Administração de Empresas e atualmente cursando Analise e Desenvolvimento de Programas. Sempre enxerguei a tecnologia como uma ferramenta poderosa para otimizar o trabalho e facilitar a vida das pessoas.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}> 
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                <Box paddingX={5} >
                    <h3>Daisy Viana</h3>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                <Box paddingX={5} >
                    <h3>Giselle Souza</h3>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                <Box paddingX={5} >
                    <h3>João Vitor Moreira</h3> 
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                <Box paddingX={5} >
                    <h3>Nicolle Sanches</h3>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                <Box paddingX={5} >
                    <h3>Yngrid Padilha</h3>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Sobre;
