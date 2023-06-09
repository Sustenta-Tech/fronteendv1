import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Box, useTheme } from "@mui/material";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Sobre.css'

function Sobre() {

    const theme = useTheme();
    
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='titulo'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={15}>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" className='devscard2' style={{ color: theme.palette.secondary.contrastText}}>Somos Sustenta Tech</Typography>
                        <Typography variant="body1" gutterBottom color="textPrimary" component="h5" align="center" className='devscard2'  style={{ color: theme.palette.secondary.contrastText}}>Somos uma organização que tem o compromisso de oferecer alternativas inteligentes para atender às necessidades de nossos clientes e do planeta.
                            Nos dedicamos a encontrar soluções inovadoras e eficientes, que ajudem a impactar positivamente o mundo e melhorar a vida das pessoas.
                            Os nossos valores são guiados pela ética, qualidade e respeito ao meio ambiente.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="https://imgur.com/oLZqVGa.png"  referrerPolicy="no-referrer"/>
                    </Box>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='cardmissao' style={{ color: theme.palette.secondary.contrastText}}>
                <Grid item xs={6}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="https://imgur.com/xQNjX0E.png"  referrerPolicy="no-referrer" />
                    </Box>
                </Grid>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={15} >
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Nossa Missão</Typography>
                        <Typography variant="body1" gutterBottom color="textPrimary" component="h5" align="center" className='devscard'>A Sustenta Tech acredita que juntos, podemos promover um futuro mais sustentável e ecologicamente viável. Oferecemos soluções que visam incentivar a utilização de fontes renováveis de energia, garantindo produtos de alta qualidade e confiabilidade.</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className='titulo'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={15}>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" className='devscard2' style={{ color: theme.palette.secondary.contrastText}} >Sobre o Projeto</Typography>
                        <Typography variant="body1" gutterBottom color="textPrimary" component="h5" align="center" className='devscard2' style={{ color: theme.palette.secondary.contrastText}} >Durante o Bootcamp Desenvolvedor Java Full Stack desenvolvemos este projeto integrador de conclusão do curso. Nosso e-commerce se baseou na Agenda 2030 da ONU, com foco em Sustentabilidade. Para a construção, utitlizamos tecnologias: Java, Spring Boot, Postgree, MySql, React, TypeScript, HTML e CSS. </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} style={{ color: theme.palette.secondary.contrastText}}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="https://imgur.com/oLoGgZG.png"  referrerPolicy="no-referrer"/>
                    </Box>
                </Grid>
            </Grid>

            {/* GRID DESENVOLVEDOR */}

            <Grid container spacing={5} className='cardtech'>
                <Grid item xs={12} direction="row" justifyContent="center" alignItems="center">
                    <Box paddingX={15}>
                        <Typography variant="h4"component="h3" align="center" className=''>Conheça a Equipe</Typography>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="https://imgur.com/eI3QbIk.png" className="fotosDev"  referrerPolicy="no-referrer"/>
                        <Typography variant="h6" gutterBottom component="h3" align="center" className="nomeDev">Andresa Marçal</Typography>
                        <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard' id="devsFila1">Com formação em Recursos Humanos, atualmente curso Análise e Desenvolvimento de Sistemas. Sou apaixonada por desafios e na Tecnologia, encontrei a paixão que me impulsiona a aprender e evoluir constantemente.</Typography>

                        <Box display="flex" alignItems="center" justifyContent="center" color='primary' className="cardicons">
                            <a href="https://www.linkedin.com/in/andresa-mar%C3%A7al/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/amarcal07" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://wa.me/552196719599" target="_blank">
                                <WhatsAppIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="https://imgur.com/LJQVlbE.jpeg" className="fotosDev"  referrerPolicy="no-referrer"/>
                        <Typography variant="h6" className="nomeDev" gutterBottom component="h3" align="center">Andressa Camillo</Typography>
                        <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard' id="devsFila1">Me formei em Comunicação Social e fiz do Bootcamp de Pessoa Desenvolvedora minha escola. Acredito que a combinação de Programação e Comunicação resultam excelentes projetos quando presentes em uma equipe.</Typography>

                        <Box display="flex" alignItems="center" justifyContent="center" color='primary' className="cardicons">
                            <a href="https://www.linkedin.com/in/andressa-camillo-082471200/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/Andressacamillo" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://wa.me/5511993291856" target="_blank">
                                <WhatsAppIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="https://imgur.com/a3ltObd.png" className="fotosDev"  referrerPolicy="no-referrer"/>
                        <Typography variant="h6" className="nomeDev" gutterBottom component="h3" align="center">Daisy Viana</Typography>
                        <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard' id="devsFila1">Como Desenvolvedora, estou aprimorando minhas habilidades para desenvolver soluções eficazes. Determinada e apaixonada por Programação, meu objetivo é me tornar uma excelente Desenvolvedora.</Typography>

                        <Box display="flex" alignItems="center" justifyContent="center" color='primary' className="cardicons">
                            <a href="https://www.linkedin.com/in/daisyviana" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/Daisyviana" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://wa.me/5511963821313" target="_blank">
                                <WhatsAppIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="https://imgur.com/cJxpZ5T.png" className="fotosDev"  referrerPolicy="no-referrer"/>
                        <Typography variant="h6" className="nomeDev" gutterBottom component="h3" align="center" >Giselle Souza</Typography>
                        <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard' id="devsFila1">Formada em Administração de Empresas. Atualmente curso Análise e Desenvolvimento de Programas. Sempre enxerguei a tecnologia como uma ferramenta poderosa para otimizar o trabalho e facilitar a vida das pessoas.</Typography>

                        <Box display="flex" alignItems="center" justifyContent="center" color='primary' className="cardicons">
                            <a href="https://www.linkedin.com/in/giselle-de-souza-gabriel/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/gisellesouzaa/" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=5511999059579&text=Ol%C3%A1!%20Tudo%20bem%3F%20Vi%20seu%20portf%C3%B3lio" target="_blank">
                                <WhatsAppIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="https://imgur.com/1OHMGcY.png" className="fotosDev"  referrerPolicy="no-referrer" />
                        <Typography variant="h6" className="nomeDev" gutterBottom component="h3" align="center" >João Vitor Moreira</Typography>
                        <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Técnico em Arquivologia, atualmente estudo Análise e Desenvolvimento de Sistemas. Apaixonado por Programação, busco melhorar minhas habilidades e conhecimentos, focando em soluções que causem um impacto positivo.</Typography>

                        <Box display="flex" alignItems="center" justifyContent="center" color='primary' className="cardicons">
                            <a href="https://www.linkedin.com/in/moreira-joao-vitor/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/JOAOVITORMOREIRA" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://wa.link/hdolyc" target="_blank">
                                <WhatsAppIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="https://imgur.com/wPEpYQo.png" className="fotosDev"  referrerPolicy="no-referrer"/>
                        <Typography variant="h6" className="nomeDev" gutterBottom component="h3" align="center">Nicolle Sanches</Typography>
                        <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Formada no Bootcamp de Desenvolvedora Java. Sou apaixonada por desafios e Programação. A minha determinação é evidenciada pela resiliência. Tenho como objetivo encontrar soluções e simplificar a vida das pessoas com a Tecnologia.</Typography>

                        <Box display="flex" alignItems="center" justifyContent="center" color='primary' className="cardicons">
                            <a href="https://www.linkedin.com/in/nicollesanchesribeiro/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/nicollesanches" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://wa.me/5511989452355" target="_blank">
                                <WhatsAppIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="https://imgur.com/YV4G0Yl.png" className="fotosDev"  referrerPolicy="no-referrer"/>
                        <Typography variant="h6" className="nomeDev" gutterBottom component="h3" align="center">Yngrid Padilha</Typography>
                        <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Enquanto estudante de Análise e Desenvolvimento de Sistemas, vejo a possibilidade de mudanças com a ajuda da tecnologia, criatividade, persistência e trabalho em equipe. Me mover pelo novo é a minha paixão.</Typography>

                        <Box display="flex" alignItems="center" justifyContent="center" color='primary' className="cardicons">
                            <a href="https://www.linkedin.com/in/yngrid-padilha-8ba3601a5/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/yngridp" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://wa.me/5511985745497" target="_blank">
                                <WhatsAppIcon style={{ fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Sobre;
