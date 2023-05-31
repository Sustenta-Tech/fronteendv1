import React from "react";
import { Button, Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import './Home.css'
import Carrossel from "../../components/carrossel/Carrossel";
import CarrosselInfo from "../../components/carrosselInfo/CarrosselInfo";
import ListaProdutos from "../../components/produtos/listaproduto/ListaProdutos";
// import ListaCategoria from "../../components/categorias/listacategoria/ListaCategoria";

function Home() {
    return (
        <>
            <Grid container style={{ marginTop: "8px" }}>
                <Grid item xs={12}>
                    <Carrossel />
                    {/* <ListaCategoria /> */}
                    <ListaProdutos />
                </Grid>
            </Grid>

            <Grid container style={{ marginTop: "8px" }}>
                <Grid item xs={12}>
                    <CarrosselInfo />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;